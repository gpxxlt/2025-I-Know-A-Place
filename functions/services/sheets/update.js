const { GoogleSpreadsheet } = require('google-spreadsheet');
const serviceAccount = require('../../config/tedxcmu-narratives.json');

const document = new GoogleSpreadsheet('1HqvhQan7laZKs9Ou-aoZ9PstC6TdSjQeL4HuVfRnL2w');

module.exports = async (change, context) => {
    const previousValue = change.before.data();
    const newValue = change.after.data();

    await document.useServiceAccountAuth(serviceAccount);
    await document.loadInfo();

    if (!previousValue.approved && newValue.approved) {
        const sheet = document.sheetsByIndex[0];
        await sheet.addRow([
            newValue.name,
            newValue.email,
            newValue.prompt,
            newValue.story?.text,
            `${newValue.latLong?.lat}, ${newValue.latLong?.lng}`,
            'APPROVED',
            'PENDING'
        ]);
    }

    return Promise.resolve(0);
};

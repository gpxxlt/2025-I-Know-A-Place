const admin = require('firebase-admin');
const functions = require("firebase-functions");
const serviceAccount = require('./config/tedxcmu-narratives.json');

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://tedxcmu-narratives-default-rtdb.firebaseio.com'
    });
} catch (err) {
    console.error(err);
}

exports.sheets = {
    create: functions.firestore.document('stories/{storyId}').onCreate(require('./services/sheets/create')),
    update: functions.firestore.document('stories/{storyId}').onUpdate(require('./services/sheets/update'))
};

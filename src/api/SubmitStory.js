// API end point for sending user stories to database

import { addStory } from "../database/AddStory";

async function submitStory(req, res) {
    if (req.method === 'POST') {
        const { name, email, prompt, storyText } = req.body;

        try {
            const userID = await addStory(name, email, prompt, storyText);
            return res.status(200).json({ message: 'Story successfully submitted' }, userID);
        }
        catch (error) {
            // If credentials are invalid, return an error response
            return res.status(401).json({ error: `${error.message}` });
        }
    }
}

export default submitStory;

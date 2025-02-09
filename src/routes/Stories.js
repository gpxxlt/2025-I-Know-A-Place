// API end point for sending user stories to database
import express from 'express';
import StoryForm from '../models/StoryModel.js';

const router = express.Router();

// Actual path is set in Server.js, no worries here
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const newStory = await StoryForm.create(req.body);
        console.log('Successfully created story form');
        return res.status(201).json(newStory);
    }
    catch (error) {
        // If credentials are invalid, return an error response
        console.log(error);
        return res.status(401).json({ error: `${error.message}` });
    }
})

export default router;

import mongoose from "mongoose";
import { Double } from "mongodb";

const StorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },

        email: {
            type: String,
            required: true
        },

        storyText: {
            type: String,
            required: true
        },

        prompt: {
            type: String,
            required: false
        },

        longitude: {
            type: Double,
            required: true
        },

        latitude: {
            type: Double,
            required: true
        }
    },
    {
        collection: 'story-forms',
    }
);

const StoryForm = mongoose.model('StoryForm', StorySchema);

export default StoryForm;

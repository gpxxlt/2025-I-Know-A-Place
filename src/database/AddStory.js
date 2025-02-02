// Database receives user quest for adding a story

import {connectToMongo} from "./Mongo";

export async function addStory(name, email, prompt, storyText){

    const { db } = connectToMongo();

    console.log('Connect to db, start adding');

    const newStory = {
        name,
        email,
        prompt,
        storyText,
        createdAt: new Date(),
    }

    const result = await db.collection('stories').insertOne(newStory);

    return result.insertedId;

}

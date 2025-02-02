// API end point for requesting search result based on keyword

import {getFilterStory} from "../database/FilterStory";
import {connectToMongo} from "../database/Mongo";

const url = require('url');
const http = require('http');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://yuepengg:Gyp040530@mango@yg-mongo-trial.bhd4j.mongodb.net/\n";

const server = http.createServer(async (req, res) => {

    const queryObject = url.parse(req.url, true).query;
    const keywords = queryObject.keywords;
    console.log(keywords);

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connect to db, start adding');

    try {
        await client.connect();
        const database = client.db('I_know_a_place');
        const collection = database.collection('stories');

        // Query MongoDB for matching stories
        const results = await collection.find({
            title: { $regex: keywords, $options: 'i' }
        }).toArray();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
    }
    catch (err) {
        console.error('Error fetching data:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
    finally {
        await client.close();
    }
});


server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});

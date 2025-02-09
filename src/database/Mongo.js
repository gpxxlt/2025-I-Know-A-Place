// import { MongoClient } from 'mongodb';
//
// let client;
// let clientPromise;
//
// // TODO: change <db_password> to actual password for successful connection
// // const uri = "mongodb+srv://yuepengg:Gyp040530@mango@yg-mongo-trial.bhd4j.mongodb.net/\n";
//
// client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// clientPromise = client.connect();
//
// export async function connectToMongo() {
//     const db = (await clientPromise).db('I_know_a_place');
//     return {db};
// }

import mongoose from 'mongoose';

const mongoosePromise = mongoose.connect('mongodb://localhost:27017/I_know_a_place', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection success'))
    .catch(err => console.error('Connection failure', err));


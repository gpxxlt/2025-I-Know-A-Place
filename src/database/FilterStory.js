// import {connectToMongo} from "./Mongo";
//
//
// export async function getFilterStory(keywords){
//
//     const { db } = connectToMongo();
//     const collection = db.collection('stories');
//
//     console.log('Connect to db, start adding');
//
//     try {
//         const multipleResults = await collection.find({
//             $or: keywords.map(kw => ({ title: { $regex: kw, $options: 'i' } }))
//         }).toArray();
//
//         console.log('Multiple Keywords (OR) Results:', multipleResults);
//
//         return multipleResults
//     }
//     catch (err) {
//         console.error(err);
//     }
// }
//
// export default getFilterStory;
//

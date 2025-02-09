// Connect to mongo before starting the server
import mongoose from 'mongoose';

const uri = 'mongodb+srv://yuepengg:Gyp040530%40mango@yg-mongo-trial.bhd4j.mongodb.net/?retryWrites=true&w=majority&appName=yg-mongo-trial'
const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
    dbName: 'I_know_a_place'
};

mongoose.connect(uri, clientOptions)
    .then(() => console.log('Connection success'))
    .catch(err => console.error('Connection failure', err));

// To run the server, use cmd arg node src/Server.js
import express from 'express';
import cors from 'cors';
import storyRoutes from './routes/Stories.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
};

// Handling requests sent from client on port 3000
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => {
    console.log('Listening on port 8080')
})

app.get('/', (req, res) => {
    res.send('placeholder');
});

app.use('/api/Stories', storyRoutes);

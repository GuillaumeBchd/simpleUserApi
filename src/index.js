import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
import assert from 'assert';
import express from 'express';
import User from './user.js';

const app = express()

// Auth for mongodb (should change this to be hidden... meeeh)
const user = encodeURIComponent('root');
const password = encodeURIComponent('example');
const authMechanism = 'DEFAULT';

// Connection URL
const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}`;

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url, {useNewUrlParser: true});


// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    
    app.post('/users', (req, res) => {
        let usr = new User(req.query['prenom'], req.query['nom'], req.query['txRand']);
        db.collection('users').insertOne(usr, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
        });
        res.sendStatus(200);
    });
    
    app.get("/users", (req, res) => {
        db.collection('users').find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log(docs);
            res.json(docs);
        });
    });
    
    
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
});


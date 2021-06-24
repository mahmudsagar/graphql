const express = require("express");
const {graphqlHTTP} = require('express-graphql');
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();


const schema = require('./schema/schema')
const uri =
    "mongodb+srv://mahmud:mahmud@cluster0.bxr3c.mongodb.net/readingList?retryWrites=true&w=majority";

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) return console.error(err);
        console.log("Connected to Database");
    }
);

app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for request on port 4000");
});

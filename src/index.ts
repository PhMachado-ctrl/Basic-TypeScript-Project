import express from 'express';

const app = express();

function getUsername(){
    return 'diego3g';
}

const username = getUsername();

app.get('/',(req, res) => {
    return res.send("Hello World");

})



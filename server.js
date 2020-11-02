//Using express
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

// parse application that allows the body of a http request to be parsed
app.use(bodyParser.urlencoded({extended: false}))

// parse application for json
app.use(bodyParser.json())

// response we get back from localhost:3000
// route created
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
})

// route created
// Http request gets passed up by the browser
// response gets send back to browser
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name); // logs name to conole
    res.send('Hello ' + req.params.name);
})

// route created
// json data being sent from the server down to the client
app.get('/api/movies', (req, res) => {
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];


    res.json({ movies: mymovies });
});

// test that sends back html file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//get request
// data being passed up as part of the url
app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

//Post request
// data being paased up as part of the body
app.post('/name', (req, res)=>{
res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

//Web server set up and listening at localhost:3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
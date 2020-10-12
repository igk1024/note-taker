//dependencies
const fs   = require( 'fs' );          //file system
const path = require( 'path' );        //package dealing with path/directory names

//require express
const express = require('express');

//instantiate the server
const app = express();
const PORT = 3001;

//sets up the express app to parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'))
app.use(express.static(__dirname));


//tell server when client goes to <ourhost>/api, app will use this router
require('./routes/routes')(app);


//set-up  server to listen on port 3001, if HEROKU didn't set  environment variable
//app.listen route should always be last in file
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
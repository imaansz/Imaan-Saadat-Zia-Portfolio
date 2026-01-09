const express = require("express");
const portNumber = 5000;
const fs = require('fs');
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "templates"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'templates')));

const server = app.listen(portNumber, () => {
    console.log(`Web server started and running at http://localhost:${portNumber}`);
    console.log("Type stop to shutdown the server: ");
});

app.get("/", (request, response) => { 
    response.render("index");
}); 

app.get("/projects", (request, response) => { 
    response.render("projects");
}); 

app.get("/flowerPlatform", (request, response) => { 
    response.render("flowerPlatform");
}); 

app.get("/animeLookup", (request, response) => { 
    response.render("animeLookup");
}); 

app.get("/portfolioWebsite", (request, response) => { 
    response.render("portfolioWebsite");
}); 

app.get("/spaceAdventure", (request, response) => { 
    response.render("spaceAdventure");
}); 



process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if (input === 'stop') {
        console.log('Shutting down the server');
        server.close();
        process.exit(0);
    } else {
        console.log(`Invalid command: ${input}`);
    }
});
const express = require('express')
const app = express()
const path = require('path');


app.use(express.static(__dirname+'/public'));

app.get("/", (req, res) => {
  
    res.sendFile(path.join(__dirname,"pages/Benny.html"))
})

app.get("/project", (req, res) => {
  
    res.sendFile(path.join(__dirname,"pages/project.html"))
})



app.listen(8050, () => console.log("listening on port 8080"))
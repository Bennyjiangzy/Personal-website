const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get("/", (req, res) => {
  
    res.sendFile(path.join(__dirname,"pages/Benny.html"))
})

app.get("/project", (req, res) => {
  
    res.sendFile(path.join(__dirname,"pages/project.html"))
})

app.get("/Me", (req, res) => {
  
    res.sendFile(path.join(__dirname,"public/Benny.jpg"))
})

app.get("/Resume", (req, res) => {
  
    res.sendFile(path.join(__dirname,"public/Benny Resume.pdf"))
})

app.get("/Happy", (req, res) => {
  
    res.sendFile(path.join(__dirname,"public/Happy.png"))
})

app.get("/Pygame", (req, res) => {
  
    res.sendFile(path.join(__dirname,"public/Pygame.png"))
})



app.listen(8080, () => console.log("listening on port 8080"))
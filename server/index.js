// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the port our server will run on
const port = 3000


// allow static assets in public folder
app.use(express.static('public'))

const root = require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))


// define our server routes

app.get('/', (req, res)=>{
    res.sendFile('index.html', { root })
})


app.get('/message', (req, res)=>{
    // do something when the server processes this request

    // send back a reponse to the client
    res.send("Hello from our server!")
})


app.post('/api', (req, res)=>{
    res.send("Received post request!")
})


// run our server to listen at the port we defined
app.listen(port, ()=>{
    console.log(`Sever is running on port ${port}`)
})
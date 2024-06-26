// import database file (db.js) and connect to mongodb database
const connectToMongo = require('./db.js')
connectToMongo();
// import Express.js, run it and define port where backend is host
const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
// Use express.json() because of writing json on POST request
app.use(express.json())
app.use(cors());
// If user hits the endpoint '/api/auth' then the user gets data of './routes/authentication'
app.use('/api/auth', require('./routes/authentication'))
app.use('/api/notes', require('./routes/notes'))
// app.get('/api/notes', require('./routes/notes'))

// If the App is proper running then the following line is executed
app.listen(port, () => {
    console.log(`iNotebook listening on port http://localhost:${port}`)
})
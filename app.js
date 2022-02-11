require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'))
.catch(err => console.log(err))

const peopleRoutes = require('./routes/peopleRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This Server is running')
})

app.use('/api/people', peopleRoutes)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
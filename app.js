const express = require('express')
const cors = require('cors')

const peopleRoutes = require('./routes/peopleRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/people', peopleRoutes)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))



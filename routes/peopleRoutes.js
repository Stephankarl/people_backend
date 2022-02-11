const express = require('express')
const router = express.Router()

const people = [
    {
        name: 'Stephan Karl',
        age: 35
    },
    {
        name: 'Macy Karl',
        age: 26
    },
    {
        name: 'Rene Jouber ',
        age: 36
    },
]

router.get('/', (req, res) => {
    res.send(people)
})

module.exports = router
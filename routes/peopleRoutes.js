const express = require('express')
const Person = require('../models/Person')
const router = express.Router()

router.get('/', (req, res) => {
    Person.find({}, (err, people) => {
        if (err) throw err
        res.send(people)
    })
})

router.post('/', (req, res) => {
    new Person(req.body).save()
})

module.exports = router
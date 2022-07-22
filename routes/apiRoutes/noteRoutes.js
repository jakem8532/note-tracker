const router = require('express').Router()
const { notes } = require('../../db/db.json')
const Database = require('../../db/database.js')
const database = new Database()

router.get('/notes', (req, res) => {
    database.getAll().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
        return res.status(500).end()
    })
})

router.post('/notes',(req, res) => {
    const note = req.body

    const randomId = Math.floor((Math.random()*1000) + 1)
    note.id = randomId

    database.push(note).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
        return res.status(500).end()
    })
})

router.delete('/notes', (req, res) => {

})

module.exports = router
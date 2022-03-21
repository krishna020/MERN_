const express = require('express')
const router = express.Router()
const krishnaa = require('../models/alien')

router.get('/', async (req, res) => {
    try {
        const aliens = await krishnaa.find()
        res.json(aliens)
    }
    catch (err) {
        res.send('Error :' + err)

    }
})


// router.get('/aliens', async (req, res) => {
//     try {
//         if(id==){
//         const aliens = await krishnaa.find()
//         res.json(aliens)
//     }
//     catch (err) {
//         res.send('Error :' + err)

//     }
// })




router.get('/:id', async (req, res) => {
    try {
        const aliens = await krishnaa.findById(req.params.id)
        res.json(aliens)
    }
    catch (err) {
        res.send('Error :' + err)

    }
})

router.post('/', async (req, res) => {

    const alien = new krishnaa(
        {
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        })
    try {
        const a1 = await alien.save()
        res.json(a1)

    }
    catch (err) {
        res.send('error :' + err)
    }

})
module.exports = router;
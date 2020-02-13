const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Tasks } = require('../models/tasks');

//localhost:8000/tasks
router.get('/', (req, res) => {
    Tasks.find((err, data) => {
        if (!err) { res.send(data) } else { console.log('Error in Retriving Tasks :' + JSON.stringify(err, undefined, 2)) }
    })
})

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Tasks.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data)
        } else { console.log('Error in retriving Tasks :' + JSON.stringify(err, undefined, 2)) }
    })
});

router.post('/', (req, res) => {
    var task = new Tasks({
        title: req.body.title,
        description: req.body.description
    });
    task.save((err, data) => {
        if (!err) { res.send(data) } else { console.log('Error in Task Save :' + JSON.stringify(err, undefined, 2)) }
    })
})

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:  ${req.param.id}`);

    var task = {
        title: req.body.title,
        description: req.body.description
    };
    Tasks.findByIdAndUpdate(req.params.id, { $set: task }, { new: true }, (err, data) => {
        if (!err) { res.send(data) } else {
            console.log('Error in Tasks Update : ' +
                JSON.stringify(err, undefined, 2))
        }
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:  ${req.param.id}`);

    Tasks.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) { res.send(data) } else {
            console.log('Error in Tasks Delete : ' +
                JSON.stringify(err, undefined, 2))
        }
    })

})

module.exports = router;
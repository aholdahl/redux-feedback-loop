const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res)=>{
    let feedback = req.body
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding","support","comments") VALUES($1, $2, $3, $4);`
    pool.query(queryText, [feedback.feelingReducer, feedback.understandingReducer, feedback.supportReducer, feedback.commentsReducer])
    .then((result)=>{
        res.sendStatus(201)
    }).catch((error)=>{
        res.sendStatus(500)
    })
})

module.exports = router;
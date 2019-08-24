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

router.get('/', (req, res)=>{
    let queryText = `SELECT * from "feedback" ORDER BY "date" DESC;`
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows)
    }).catch((error)=>{
        res.sendStatus(500)
    })
})

router.delete('/:id', (req, res)=>{
    let itemToDelete = req.params.id;
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`
    pool.query(queryText, [itemToDelete])
    .then((result)=>{
        res.sendStatus(204)
    }).catch((error)=>{
        res.sendStatus(500);
    })
})

module.exports = router;
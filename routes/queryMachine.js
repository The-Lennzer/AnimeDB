const express = require('express');


const queryController = require('../Controllers/queryController.js');



const router = express.Router();

router.post('/api/execute-query', queryController.getQuery);


module.exports = router;
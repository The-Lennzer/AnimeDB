const queryMachine = require('../Models/queryMachineModel');

exports.getQuery =  (req, res, next) => {
    const { query } = req.body; 
    queryMachine.runQueryOnDatabase(query)
    .then(([rows, fieldData]) => {
        res.json(rows)
        console.log(rows);
    })
    .catch(err => {
        console.log(err);
    })

};
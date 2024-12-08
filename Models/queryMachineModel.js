const db = require('../utils/database')
module.exports = class QueryMachine{
    static runQueryOnDatabase(query){
        return db.execute(query);
    }
}
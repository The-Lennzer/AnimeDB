const db = require('../utils/database')
module.exports = class Anime{
    static fetchDataFromDB(){
        return db.execute('SELECT * FROM anime');
    }
}
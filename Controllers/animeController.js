const Anime = require('../Models/anime');

exports.getAnimeDetails = (req, res, next) => {
    Anime.fetchDataFromDB()
    .then(([rows, fieldData]) => {
        res.json(rows) 
})
.catch(err => {
    console.log(err);
})
}
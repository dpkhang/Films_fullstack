const filmModel = require('../models/film.model')

class FilmController {
    async getFilm(req, res) {
        const film = await filmModel.getFilm(req, res)
        res.json(film)
    }
}

module.exports = new FilmController
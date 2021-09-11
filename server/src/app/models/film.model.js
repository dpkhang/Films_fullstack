const filmSchema = require('../../config/schema/film.schema')

class FilmModel {
    getFilm(req, res) {
        return filmSchema.find({})
                         .then(films => films.map(film => film.toObject()))
                         .catch(err => res.status(403).send(err))
    }
}

module.exports = new FilmModel

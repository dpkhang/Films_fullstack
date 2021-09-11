const authToken = require('../middleware/token')
const FilmController = require('../app/controllers/film.controller')

const route = app =>{
    app.get('/', authToken, FilmController.getFilm)
}

module.exports = route
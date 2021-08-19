const authToken = require('../middleware/token');


let films = [
    {
        id: 1,
        name: "naruto",
    },
    {
        id: 2,
        name: "one piece"
    },
    {
        id: 3,
        name: "fairy tail"
    }
]

const route = app =>{
    app.get('/', authToken, (req, res)=>{res.json(films)});
}

module.exports = route;
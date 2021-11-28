import React, {useState} from 'react'
import PropTypes from 'prop-types'
import  './Popular.scss'
import Action from '../Popular/Action/Action'
import Adventure from '../Popular/Adventure/Adventure'
import Cartoon from '../Popular/Cartoon/Cartoon'
import Drama from '../Popular/Drama/Drama'
import Horror from '../Popular/Horror/Horror'
import Comedy from '../Popular/Comedy/Comedy'
import Romance from '../Popular/Romance/Romance'
Popular.propTypes = {
    
};

function Popular(props) {
    //props

    //state
    const [films] = useState([
        {
            name: 'Avatar',
            url: '/img/films/avatar.jpg'
        },
        {
            name: 'Bo gia',
            url: '/img/films/bogia.jpg'
        },
        {
            name: 'Fast & Furious',
            url: '/img/films/fast&furious.jpg'
        },
        {
            name: 'Parasite',
            url: '/img/films/kysinhtrung.jpg'
        },
        {
            name: 'Nhu Y Truyen',
            url: '/img/films/nyt.jpg'
        }
    ])

    return (
        <div className="popular">
            <Action actionFilms={films}></Action>
            <Adventure adventureFilms={films}></Adventure>
            <Cartoon cartoonFilms={films}></Cartoon>
            <Horror horrorFilms={films}></Horror>
            <Comedy comedyFilms={films}></Comedy>
            <Drama dramaFilms={films}></Drama>
            <Romance romanceFilms={films}></Romance>
        </div>
    )
}

export default Popular

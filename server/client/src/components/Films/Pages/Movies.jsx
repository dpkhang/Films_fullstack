import React, { useEffect } from 'react'
import Films from '../Gen/Films/Films'
import FilmsFilter from '../Gen/FilmsFilter/FilmsFilter'
import './Movies.scss'

function MoviePage(props) {
    useEffect(()=>{
        document.title ='Movies | Hippo Movies'
    })

    return (
        <div className='movies-master'>
            <FilmsFilter/>
            <div className='container'>
                <div className='row'>
                    <Films/>
                    <Films/>
                    <Films/>
                    <Films/>
                </div>
                <div className='row'>
                    <Films/>
                    <Films/>
                    <Films/>
                    <Films/>
                </div>
                <div className='row'>
                    <Films/>
                    <Films/>
                    <Films/>
                    <Films/>
                </div>
            </div>
        </div>
    )

}

export default MoviePage
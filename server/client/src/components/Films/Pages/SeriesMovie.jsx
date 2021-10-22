import React, { useEffect } from 'react'
import Films from '../Gen/Films/Films'
import FilmsFilter from '../Gen/FilmsFilter/FilmsFilter'
import './SeriesMovies.scss'


function SeriesMoviePage(props) {
    useEffect(()=>{
        document.title ='Series Movies | Hippo Movies'
    }, [])
    return (
        <div className='series-movies-master'>
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

export default SeriesMoviePage
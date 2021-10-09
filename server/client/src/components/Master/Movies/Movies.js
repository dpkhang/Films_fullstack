import React from 'react'
import Films from '../Public/Films/Films'
import FilmsFilter from '../Public/FilmsFilter/FilmsFilter'
import './Movies.scss'
class Movie extends React.Component {
    componentWillMount() {
        document.title ='Movies | Films-X'
    }
    render(){
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
}

export default Movie;
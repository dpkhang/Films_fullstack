import React from 'react'
import Films from '../Films/Films'
import FilmsFilter from '../FilmsFilter/FilmsFilter'
class Movie extends React.Component {
    componentWillMount() {
        document.title ='Movies | Films-X'
    }
    render(){
        return (
            <div>
                <FilmsFilter/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
                <Films/>
            </div>
        )
    }
}

export default Movie;
import React from 'react'
import Slider from '../Home/Slider/Slider'
import NewTrailers from '../Home/NewTrailers/NewTrailers'
import './Home.scss'
import FilmsVision from '../Home/Actor/Actor'
class Vision extends React.Component {
    render() {
        return (
            <div className='vision'>
                <Slider/>
                <NewTrailers/>
                <FilmsVision/>
            </div>
        )
    }
}

export default Vision
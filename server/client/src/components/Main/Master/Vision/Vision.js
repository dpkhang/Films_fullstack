import React from 'react'
import Slider from './Slider/Slider'
import NewTrailers from './NewTrailers/NewTrailers'
import './Vision.scss'
import FilmsVision from './FilmsVision/FilmsVision'
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
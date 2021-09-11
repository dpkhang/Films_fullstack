import React from 'react'
import './FilmsVision.scss'
import Actor from './Actor/Actor'
class FilmsVision extends React.Component {
    render() {
        return (
            <div className='films-vision'>
                <Actor/>
            </div>
        )
    }
}

export default FilmsVision
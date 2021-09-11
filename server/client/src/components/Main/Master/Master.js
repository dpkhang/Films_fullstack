import React from 'react'
import MasterFilmsMenu from './FilmsMenu/FilmsMenu'
import {Switch} from 'react-router-dom'
import routes from '../../../routes/MasterRoute'
import MapRoute from '../../MapRoute'
import {Route} from 'react-router-dom'
import Vision from './Vision/Vision'
class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = null
    }

    componentWillMount() {
        document.title = 'Films-X'
    }

    render(){
        return (
            <div className='wrap'>
                <MasterFilmsMenu/>
                <div className='master' style={{width: '80%', overflow: 'hidden', height: 'auto', margin: '0 auto'}}>
                    <Switch>
                        <Route path='/' exact component={Vision}/>
                        <MapRoute supRoute={'/films'} routes={routes}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Master;
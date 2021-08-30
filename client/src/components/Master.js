import React from 'react';
import MasterFilmsMenu from './FilmsMenu';
import {Switch} from 'react-router-dom';
import routes from '../routes/MasterRoute';
import MapRoute from './MapRoute';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    componentWillMount() {
        document.title = 'Films-X';
    }

    render(){
        return (
            <div className='wrap'>
                <MasterFilmsMenu/>
                <div style={{width: '80%', margin: '0 auto'}}>
                    <Switch>
                        <MapRoute supRoute={'/films'} routes={routes}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Master;
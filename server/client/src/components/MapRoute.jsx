import React from 'react'
import {Route, Switch} from 'react-router-dom'

function MapRoute(props) {
    return (
        <Switch>
            {    
                props.routes.map((route, index) => {
                    return (
                    <Route
                        path={`${props.supRoute}${route.path}`}
                        component={route.component}
                        exact={route.exact}
                        key={index}
                    />
                    );
            })}
        </Switch>
    )
}

export default MapRoute;
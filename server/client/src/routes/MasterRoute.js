import New from '../components/Master/Pages/New'
import Popular from '../components/Master/Pages/Popular'
import Movies from '../components/Master/Pages/Movies'
import SeriesMovies from '../components/Master/Pages/SeriesMovie'
import Trailers from '../components/Master/Pages/Trailer'
import NotFound from '../components/NotFound/NotFound'
import Details from '../components/Master/Pages/Detail'
import Home from '../components/Master/Pages/Home'
import Actors from '../components/Master/Pages/Actor'
const MasterSubRouter= [
    {
        path: '/',
        exact: true,
        component: ()=> <Home/>
    },
    {
        path: '/new',
        exact: false,
        component: ()=> <New/>
    },
    {
        path: '/popular',
        exact: false,
        component: ()=> <Popular/>
    },
    {
        path: '/movies',
        exact: false,
        component: ()=> <Movies/>
    },
    {
        path: '/series-movies',
        exact: false,
        component: ()=> <SeriesMovies/>
    },
    {
        path: '/details/:slug',
        exact: false,
        component: (props)=> <Details match={props}/>
    },
    {
        path: '/trailers',
        exact: false,
        component: ()=> <Trailers/>
    },
    {
        path: '/actors',
        exact: false,
        component: ()=> <Actors></Actors>
    },
    {
        path: '',
        exact: false,
        component: ()=> <NotFound/>
    },
]

export default MasterSubRouter
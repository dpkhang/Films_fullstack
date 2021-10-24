import New from '../components/Films/Pages/New'
import Popular from '../components/Films/Pages/Popular'
import Movies from '../components/Films/Pages/Movies'
import SeriesMovies from '../components/Films/Pages/SeriesMovie'
import Trailers from '../components/Films/Pages/Trailer'
import NotFound from '../components/NotFound/NotFound'
import Details from '../components/Films/Pages/Detail'
import Home from '../components/Films/Pages/Home'
import Actors from '../components/Films/Pages/Actor'
import Profile from '../components/Films/Pages/Profile'
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
        path: '/profile',
        exact: false,
        component: ()=> <Profile></Profile>
    },
    {
        path: '',
        exact: false,
        component: ()=> <NotFound/>
    },
]

export default MasterSubRouter
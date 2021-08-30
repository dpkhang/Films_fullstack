import New from '../components/New';
import Popular from '../components/Popular';
import Movies from '../components/Movies';
import SeriesMovies from '../components/SeriesMovies';
import Trailers from '../components/Trailers';
import NotFound from '../components/NotFound';

const MasterSubRouter= [
    {
        path: '/',
        exact: true,
        component: ()=> <New/>
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
        path: '/trailers',
        exact: false,
        component: ()=> <Trailers/>
    },
    {
        path: '',
        exact: false,
        component: ()=> <NotFound/>
    },
]

export default MasterSubRouter;
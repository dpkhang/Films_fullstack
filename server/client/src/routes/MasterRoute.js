import New from '../components/Main/Master/New/New';
import Popular from '../components/Main/Master/Popular/Popular';
import Movies from '../components/Main/Master/Movies/Movies';
import SeriesMovies from '../components/Main/Master/SeriesMovie/SeriesMovies';
import Trailers from '../components/Main/Master/Trailer/Trailers';
import NotFound from '../components/Main/NotFound/NotFound';

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
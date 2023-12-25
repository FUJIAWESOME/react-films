import FilmCard from './FilmCard';
// import { API_KEY, URL } from '../constants';
// import { FilterContext } from './FilterContext';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect } from 'react';
// import { getFavoriteFilmsId } from '../Requests';
import { useDispatch, useSelector } from 'react-redux';
// import { loadFilms } from '../redux/asyncActions';
import { fetchFavoriteList, fetchFilms } from '../redux/asyncActions';

function FilmCardList() {
    const filters = useSelector(state => state.filters);
    const films = useSelector(state => state.asyncData.films);
    // console.log(films)
    const dispatch = useDispatch();
    // const filtersValue = useContext(FilterContext);
    // const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //       accept: 'application/json',
        //       Authorization: `Bearer ${API_KEY}`
        //     }
        // };
        
        // const isSearch = filtersValue.name.trim() !== '';
        // const sortByUrl = filtersValue.selectSortValue === 'Популярности' ? URL.API.POPULAR_FILMS : URL.API.TOP_RATED_FILMS;
        // const defaultUrl = `${sortByUrl}&page=${filtersValue.page}`;
        // const searchUrl = new window.URL(`${URL.API.SEARCH}${filtersValue.name}&include_adult=false&language=ru&page=${filtersValue.page}`);
        // const url = isSearch ? searchUrl : defaultUrl;
        
        // fetch(url, options)
        // .then(response => response.json())
        // .then(response => {
        //     try {
        //         setFilmsList([...response.results]);
        //         localStorage.setItem('films', JSON.stringify(response));
        //     } catch (error) {
        //         console.error(error);
        //     }
        // })
        // .catch(err => console.error(err));

        // requestGetFavoriteFilmsId();
        // requestGetFilms(filters, setFilmsList);
        dispatch(fetchFavoriteList());
        dispatch(fetchFilms(filters));

    }, [filters, dispatch]);

    
    // function getFavoriteFilms() {
    //     try {
    //         const films = JSON.parse(localStorage.getItem('favoriteFilmsId'));
    //         return films;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // setFilmsList([...getFilms()]);
    const isNotLoadedContent = films.length === 0;
    if (isNotLoadedContent) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    margin: '0 auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
          >
            <CircularProgress />
          </Box>
        );
    }

    return (
        <Box sx={{ marginTop: 10 }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {films.map(item => (
                    <Grid item key={item.id} >
                        <FilmCard
                            title={item.title}
                            image={item.image}
                            rating={Math.round(item.rating)}
                            id={item.id}
                            // isFavoriteFilm={getFavoriteFilmsId()?.includes(item.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    // return (
    //     <Box sx={{ marginTop: 10 }}>
    //         <Grid container spacing={3} alignItems="center" justifyContent="center">
    //             {filmsList.map(item => (
    //                 <Grid item key={item.id} >
    //                     <FilmCard
    //                         title={item.title}
    //                         image={item.backdrop_path}
    //                         rating={Math.round(item.vote_average)}
    //                         id={item.id}
    //                         isFavoriteFilm={getFavoriteFilmsId()?.includes(item.id)}
    //                     />
    //                 </Grid>
    //             ))}
    //         </Grid>
    //     </Box>
    // );
}

export default FilmCardList;
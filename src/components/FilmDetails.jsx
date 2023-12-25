// import axios from 'axios';
// master
import FilmAppBar from "./FilmAppBar";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import Cookies from 'js-cookie';
// import {  requestGetCredits, requestGetDetails,  requestGetFavoriteFilmsId } from "../Requests";
import { useDispatch, useSelector } from "react-redux";
import { changeFavoriteList, fetchCredits, fetchDetails } from "../redux/asyncActions";
import { addFavoriteFilm, deleteFavoriteFilm } from "../redux/actions";
// import { requestChangeFavoriteList, requestGetDetails, requestGetCredits, getDetails, getCredits, getFavoriteFilms } from "./Requests";

// import axios from 'axios';


function FilmDetails() {
    const params = useParams();
    const router = useNavigate();
    const dispatch = useDispatch();
    
    const id = Number(params.id);
    // const [creditsList, setCreditsList] = useState([]);
    // const [detailsList, setDetailsList] = useState([]);
    const credits = useSelector(state => state.asyncData.credits);
    const details = useSelector(state => state.asyncData.details);
    // console.log('initState', credits, details);

    const favoriteList = useSelector(state => state.asyncData.favoriteList);
    const isFavorite = favoriteList.includes(id);     
    // console.log('---------------------------')  
    // console.log(typeof isFavorite, typeof id, favoriteList)
    // console.log('---------------------------')  
    
    // const defaultIsFavoriteState = getFavoriteFilmsId().includes(Number(params.id));
    // const [isFavorite, setIsFavorite] = useState(defaultIsFavoriteState);
    // function getCredits() {
    //     try {
    //         const credits = JSON.parse(localStorage.getItem('credits'));
    //         console.log(credits);
    //         return credits.cast;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // const accountId = getAccountId();
    // const apiKey = getApiKey();

    // function getAccountId() {
    //     try {
    //       const id = Cookies.get('accountId');
    //       return id;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    
    //   function getApiKey() {
    //     try {
    //       const apiKey = Cookies.get('apiKey');
    //       return apiKey;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    // function getFavoriteFilms() {
    //     try {
    //         const films = JSON.parse(localStorage.getItem('favoriteFilmsId'));
    //         return films;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    function handleAddFavorite(event) {
        event.stopPropagation();
    
        // const options = {
        //   method: 'POST',
        //   headers: {
        //     accept: 'application/json',
        //     'content-type': 'application/json',
        //     Authorization: `Bearer ${apiKey}`
        //   },
        //   body: JSON.stringify(
        //       {
        //         media_type: "movie",
        //         media_id: detailsList.id,
        //         favorite: !isFavorite
        //       }
        //     )
        // };
        
        // fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, options)
        //   .then(response => response.json())
        //   .then(response => console.log(response))
        //   .catch(err => {
        //     console.log(err);
        //     alert('Призошла ошибка! Не удалось добавить фильм в избранное!');
        //     setIsFavorite((f) => !f);
        //   });

        // requestChangeFavoriteList()
        // .catch(err => {
        //     console.log(err);
        //     alert('Призошла ошибка! Не удалось добавить фильм в избранное!');
        //     setIsFavorite((f) => !f);
        // });
        
        // requestChangeFavoriteList(params.id, isFavorite, setIsFavorite);
        // setIsFavorite((f) => !f);
        dispatch(changeFavoriteList(id, isFavorite));
        dispatch(isFavorite ? deleteFavoriteFilm(id) : addFavoriteFilm(id));
    }

    // useEffect(() => {
    //     // requestGetFavoriteFilmsId();
    //     dispatch(fetchFavoriteList());
    // }, [isFavorite, dispatch]);

    useEffect(() => {
        // requestGetDetails(params.id, );
        // requestGetCredits(params.id);
        // requestGetCredits(params.id, setCreditsList);
        // requestGetDetails(params.id, setDetailsList);
        dispatch(fetchCredits(id));
        dispatch(fetchDetails(id));

        // setDetailsList(getDetails());
        // setCreditsList(getCredits());
        // console.log(creditsList, detailsList)

        // const options = {
        //     method: 'GET',
        //     headers: {
        //       accept: 'application/json',
        //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFmNzI1MjhmZjEyOTlmNmUyNTBjZTNjYjQ4YzEzYiIsInN1YiI6IjY1NGFhYmY2NTMyYWNiMDBlMTRhNDhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IMA3kYwD8Sg42eExGyDss3ST2adYWUuky6EJ22yI6-A'
        //     }
        // };
          
        // fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?language=ru`, options)
        // .then(response => response.json())
        // .then(response => {
        //     try {
        //         setCreditsList([...response.cast]);
        //         localStorage.setItem('credits', JSON.stringify(response));
        //     } catch (error) {
        //         console.error(error);
        //     }
        // })
        // .catch(err => console.error(err));

        // fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=ru`, options)
        // .then(response => response.json())
        // .then(response => {
        //     try {
        //         setDetailsList({...response});
        //         // console.log(response)
        //         localStorage.setItem('details', JSON.stringify(response));
        //     } catch (error) {
        //         console.error(error);
        //     }
        // })
        // .catch(err => console.error(err));
        // console.log(details)
        // const movie = {
        //     title: details.title,
        //     rating: details.vote_average,
        //     country: details.production_countries?.[0].name,
        //     release_year: details.release_date?.slice(0, 4),
        //     budget: details.budget,
        //     genre: details.genres?.[0].name,
        //     revenue: details.revenue,
        //     runtime: details.runtime,
        //     description: details.overview,
        //     backgroundImage: details.backdrop_path,
        //     posterImage: details.poster_path,
        // }
        // console.log(movie);
        // axios.post('http://localhost:4444/movies', movie)
        
    }, [id, dispatch]);

















    // console.log(creditsList, detailsList)
    const isNotLoadedContent = details.length === 0 || credits.length === 0;
    // console.log(isNotLoadedContent)
    if (isNotLoadedContent) {
        return (
            <Box
                sx={{
                    display: 'flex',
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
        <>
            <FilmAppBar title='FILMS Детали'/>
            <Box sx={{ display: 'flex', gap: 10}}>
                <Box sx={{ mt: 10, ml: 1}}>
                    <Box sx={{ mb: 3, display: 'flex', gap: 3, alignItems: 'center' }}>
                        <IconButton onClick={() => router('/')}>
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>

                        <Typography variant="h4" color="initial">
                            {`${details.title} (${details.release_date?.slice(0, 4)})`}
                        </Typography>

                       <IconButton onClick={handleAddFavorite}>
                            {isFavorite ? <FavoriteTwoToneIcon color='error' fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
                       </IconButton>
                    </Box>
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />
                    </Box>
                    {/* <Box>
                        <img src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} />
                    </Box> */}
                </Box>
                <Box sx={{ mt: 18 }}>
                    <Box>
                        <Typography variant="h4" color="initial" sx={{ mb: 5 }}>
                            Детали
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 15 }}>
                            <Box>
                                {detailsOption.map((item, index) => (
                                    <Typography key={index} variant="body1" color="initial" fontSize={20}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>

                            <Box>
                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.production_countries?.[0]?.name}
                                </Typography>

                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.release_date?.slice(0, 4)}
                                </Typography>

                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.genres?.map(item => item.name).join(', ')}
                                </Typography>

                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.vote_average}
                                </Typography>

                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.revenue + '$'}
                                </Typography>

                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.budget + '$'}
                                </Typography>

                                {/* <Typography variant="body1" color="initial" fontSize={20}>
                                    Зрители
                                </Typography> */}

                                <Typography variant="body1" color="initial" fontSize={20}>
                                    {details.runtime + ' минут'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h4" color="initial" sx={{ mb: 5 }}>
                            Описание
                        </Typography>

                        <Box sx={{ maxWidth: 800}}>
                            <Typography variant="body1" color="initial" fontSize={20}>
                                {details.overview}
                            </Typography>
                            {/* {creditsList.map((item) => (
                                <Typography key={item.id} variant="body1" color="initial" fontSize={20}>
                                    {item.name}
                                </Typography>
                            ))} */}
                        </Box>
                    </Box>

                    <Box sx={{ mt: 5, mb: 5 }}>
                        <Typography variant="h4" color="initial" sx={{ mb: 5 }}>
                            Актёрский состав
                        </Typography>

                        <Box>
                            {credits.map((item) => (
                                <Typography key={item.id} variant="body1" color="initial" fontSize={20}>
                                    {item.name}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const detailsOption = ['Страна', 'Год', 'Жанр', 'Рейтинг', 'Сборы', 'Бюджет', 'Время'];

export default FilmDetails;
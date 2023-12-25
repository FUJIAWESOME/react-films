/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import IconButton from '@mui/material/IconButton';

// import Cookies from 'js-cookie';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { requestChangeFavoriteList, requestGetFavoriteFilmsId } from '../Requests';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavoriteList } from '../redux/asyncActions';
import { addFavoriteFilm, deleteFavoriteFilm } from '../redux/actions';

function FilmCard({ title, image, rating, id }) {
  // const [isFavorite, setIsFavorite] = useState(isFavoriteFilm);
  const favoriteList = useSelector(state => state.asyncData.favoriteList);
  const isFavorite = favoriteList.includes(id);
  const dispatch = useDispatch();

  const router = useNavigate();

  const imageUrl = image ? `https://image.tmdb.org/t/p/w500${image}` : 'https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg';
  // console.log(title, imageUrl)
  // console.log(image)
  // const accountId = getAccountId();
  // const apiKey = getApiKey();

  // useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //     Authorization: `Bearer ${apiKey}`
    //   },
    // };
    
    // fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies`, options)
    //   .then(response => response.json())
    //   .then(response => {
    //     try {
    //       const favoriteFilmsId = response.results.map(item => item.id);
    //       localStorage.setItem('favoriteFilmsId', JSON.stringify(favoriteFilmsId));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })
    //   .catch(err => console.error(err));
    // requestGetFavoriteFilmsId();
  // }, [isFavorite]);

  // function getAccountId() {
  //   try {
  //     const id = Cookies.get('accountId');
  //     return id;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function getApiKey() {
  //   try {
  //     const apiKey = Cookies.get('apiKey');
  //     return apiKey;
  //   } catch (error) {
  //     console.log(error);
  //   }
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
    //         media_id: id,
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
    // requestChangeFavoriteList(id, isFavorite, setIsFavorite);
    
    dispatch(changeFavoriteList(id, isFavorite));
    dispatch(isFavorite ? deleteFavoriteFilm(id) : addFavoriteFilm(id));
    // setIsFavorite((f) => !f);
  }

  return (
    <Card sx={{ maxWidth: 300 }} onClick={() => router(`/details/${id}`)}>
      <CardMedia
        sx={{ height: 240, width: 300 }}
        image={imageUrl}
        title={title}
      />
    <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Рейтинг {rating}
                </Typography>
            </Box>
            <Box>
                <CardActions>
                    <IconButton onClick={handleAddFavorite}>
                        {isFavorite ? <FavoriteTwoToneIcon color='error'/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </CardActions>
            </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FilmCard;
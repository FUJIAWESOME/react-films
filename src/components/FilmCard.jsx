/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFavoriteList } from "../redux/asyncActions";
import { addFavoriteFilm, deleteFavoriteFilm } from "../redux/actions";

function FilmCard({ title, image, rating, id }) {
  const favoriteList = useSelector((state) => state.asyncData.favoriteList);
  const isFavorite = favoriteList.includes(id);
  const dispatch = useDispatch();

  const router = useNavigate();
  console.log(favoriteList);

  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500${image}`
    : "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg";

  function handleAddFavorite(event) {
    event.stopPropagation();

    dispatch(changeFavoriteList(id, isFavorite));
    dispatch(isFavorite ? deleteFavoriteFilm(id) : addFavoriteFilm(id));
  }

  return (
    <Card sx={{ maxWidth: 300 }} onClick={() => router(`/details/${id}`)}>
      <CardMedia
        sx={{ height: 240, width: 300 }}
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                {isFavorite ? (
                  <FavoriteTwoToneIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FilmCard;

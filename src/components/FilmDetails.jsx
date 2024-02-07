import FilmAppBar from "./FilmAppBar";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  changeFavoriteList,
  fetchCredits,
  fetchDetails,
} from "../redux/asyncActions";
import { addFavoriteFilm, deleteFavoriteFilm } from "../redux/actions";

function FilmDetails() {
  const params = useParams();
  const router = useNavigate();
  const dispatch = useDispatch();
  const id = Number(params.id);
  const credits = useSelector((state) => state.asyncData.credits);
  const details = useSelector((state) => state.asyncData.details);

  const favoriteList = useSelector((state) => state.asyncData.favoriteList);
  const isFavorite = favoriteList.includes(id);

  function handleAddFavorite(event) {
    event.stopPropagation();

    dispatch(changeFavoriteList(id, isFavorite));
    dispatch(isFavorite ? deleteFavoriteFilm(id) : addFavoriteFilm(id));
  }

  useEffect(() => {
    dispatch(fetchCredits(id));
    dispatch(fetchDetails(id));
  }, [id, dispatch]);

  const isNotLoadedContent = details.length === 0 || credits.length === 0;
  if (isNotLoadedContent) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <FilmAppBar title="FILMS Детали" />
      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ mt: 10, ml: 1 }}>
          <Box sx={{ mb: 3, display: "flex", gap: 3, alignItems: "center" }}>
            <IconButton onClick={() => router("/")}>
              <ArrowBackIcon fontSize="large" />
            </IconButton>

            <Typography variant="h4" color="initial">
              {`${details.title} (${details.release_date?.slice(0, 4)})`}
            </Typography>

            <IconButton onClick={handleAddFavorite}>
              {isFavorite ? (
                <FavoriteTwoToneIcon color="error" fontSize="large" />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              )}
            </IconButton>
          </Box>
          {details.id === id ? (
            <Box>
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={details.title}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
        <Box sx={{ mt: 18 }}>
          <Box>
            <Typography variant="h4" color="initial" sx={{ mb: 5 }}>
              Детали
            </Typography>

            <Box sx={{ display: "flex", gap: 15 }}>
              <Box>
                {detailsOption.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    color="initial"
                    fontSize={20}
                  >
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
                  {details.genres?.map((item) => item.name).join(", ")}
                </Typography>

                <Typography variant="body1" color="initial" fontSize={20}>
                  {details.vote_average}
                </Typography>

                <Typography variant="body1" color="initial" fontSize={20}>
                  {details.revenue + "$"}
                </Typography>

                <Typography variant="body1" color="initial" fontSize={20}>
                  {details.budget + "$"}
                </Typography>

                <Typography variant="body1" color="initial" fontSize={20}>
                  {details.runtime + " минут"}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography variant="h4" color="initial" sx={{ mb: 5 }}>
              Описание
            </Typography>

            <Box sx={{ maxWidth: 800 }}>
              <Typography variant="body1" color="initial" fontSize={20}>
                {details.overview}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4" color="initial" sx={{ mb: 5 }}>
              Актёрский состав
            </Typography>

            <Box>
              {credits.map((item) => (
                <Typography
                  key={item.id}
                  variant="body1"
                  color="initial"
                  fontSize={20}
                >
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

const detailsOption = [
  "Страна",
  "Год",
  "Жанр",
  "Рейтинг",
  "Сборы",
  "Бюджет",
  "Время",
];

export default FilmDetails;

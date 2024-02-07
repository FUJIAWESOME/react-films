import FilmCard from "./FilmCard";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteList, fetchFilms } from "../redux/asyncActions";

function FilmCardList() {
  const filters = useSelector((state) => state.filters);
  const films = useSelector((state) => state.asyncData.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteList());
    dispatch(fetchFilms(filters));
  }, [filters, dispatch]);

  const isNotLoadedContent = films.length === 0;
  if (isNotLoadedContent) {
    return (
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
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
    <Box sx={{ marginTop: 10, marginBottom: 5 }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {films.map((item) => (
          <Grid item key={item.id}>
            <FilmCard
              title={item.title}
              image={item.image}
              rating={Math.round(item.rating)}
              id={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FilmCardList;

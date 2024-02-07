import { getAccountId, getApiKey } from "../Requests";
import { URL } from "../constants";
import {
  addFavoriteFilm,
  deleteFavoriteFilm,
  loadCredits,
  loadDetails,
  loadFavoriteList,
  loadFilms,
  loadGenres,
} from "./actions";

const apiKey = getApiKey();
const accountId = getAccountId();

const optionsGET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

const optionsPOST = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const fetchFilms = (filters) => {
  return (dispatch) => {
    // TODO: ВЫНЕСТИ В ФУНКЦИЮ
    const isSearch = filters.searchText?.trim() !== "";
    const sortByUrl =
      filters.selectSort === "Популярности"
        ? URL.API.POPULAR_FILMS
        : URL.API.TOP_RATED_FILMS;
    const defaultUrl = `${sortByUrl}&page=${filters.page}`;
    const searchUrl = new window.URL(
      `${URL.API.SEARCH}${filters.searchText}&include_adult=false&language=ru&page=${filters.page}`
    );
    const url = isSearch ? searchUrl : defaultUrl;

    fetch(url, optionsGET)
      .then((response) => response.json())
      .then((response) => dispatch(loadFilms(response)))
      .catch((err) => console.error(err));
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
    fetch(URL.API.GENRES, optionsGET)
      .then((response) => response.json())
      .then((response) => dispatch(loadGenres(response.genres)))
      .catch((err) => console.error(err));
  };
};

export const fetchCredits = (id) => {
  return (dispatch) => {
    fetch(`${URL.API.MOVIE + id}/credits?language=ru`, optionsGET)
      .then((response) => response.json())
      .then((response) => dispatch(loadCredits(response.cast)))
      .catch((err) => console.error(err));
  };
};

export const fetchDetails = (id) => {
  return (dispatch) => {
    fetch(`${URL.API.MOVIE + id}?language=ru`, optionsGET)
      .then((response) => response.json())
      .then((response) => dispatch(loadDetails(response)))
      .catch((err) => console.error(err));
  };
};

export const fetchFavoriteList = () => {
  return (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`,
      optionsGET
    )
      .then((response) => response.json())
      .then((response) => dispatch(loadFavoriteList(response.results)))
      .catch((err) => console.error(err));
  };
};

export const changeFavoriteList = (id, isFavorite) => {
  return (dispatch) => {
    optionsPOST.body = JSON.stringify({
      media_type: "movie",
      media_id: id,
      favorite: !isFavorite,
    });

    fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      optionsPOST
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.success) {
          alert("Призошла ошибка! Не удалось добавить фильм в избранное!");
          dispatch(!isFavorite ? deleteFavoriteFilm(id) : addFavoriteFilm(id));
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Призошла ошибка! Не удалось добавить фильм в избранное!");
        dispatch(!isFavorite ? deleteFavoriteFilm(id) : addFavoriteFilm(id));
      });
  };
};

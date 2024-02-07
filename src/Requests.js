import Cookies from "js-cookie";
import { URL } from "./constants";

const accountId = getAccountId();
const apiKey = getApiKey();

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

export function getAccountId() {
  try {
    return Cookies.get("accountId");
  } catch (error) {
    console.log(error);
  }
}

export function getApiKey() {
  try {
    return Cookies.get("apiKey");
  } catch (error) {
    console.log(error);
  }
}

export const requestChangeFavoriteList = (id, isFavorite, setIsFavorite) => {
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
    .then((response) => console.log(response))
    .catch((err) => {
      console.log(err);
      alert("Призошла ошибка! Не удалось добавить фильм в избранное!");
      setIsFavorite((f) => !f);
    });
};

export const requestGetCredits = (id, setCreditsList) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=ru`,
    optionsGET
  )
    .then((response) => response.json())
    .then((response) => {
      try {
        setCreditsList([...response.cast]);
        localStorage.setItem("credits", JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    })
    .catch((err) => console.error(err));
};

export const requestGetDetails = (id, setDetailsList) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru`, optionsGET)
    .then((response) => response.json())
    .then((response) => {
      try {
        setDetailsList({ ...response });
        localStorage.setItem("details", JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    })
    .catch((err) => console.error(err));
};

export const requestGetFilms = (filters, setFilmsList) => {
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
    .then((response) => {
      try {
        setFilmsList([...response.results]);
        localStorage.setItem("films", JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    })
    .catch((err) => console.error(err));
};

export const requestGetGenres = () => {
  fetch(URL.API.GENRES, optionsGET)
    .then((response) => response.json())
    .then((response) => {
      try {
        localStorage.setItem("genres", JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    })
    .catch((err) => console.error(err));
};

export const requestGetFavoriteFilmsId = () => {
  fetch(
    `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`,
    optionsGET
  )
    .then((response) => response.json())
    .then((response) => {
      try {
        const favoriteFilmsId = response.results.map((item) => item.id);
        localStorage.setItem(
          "favoriteFilmsId",
          JSON.stringify(favoriteFilmsId)
        );
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.error(err));
};

export const getDetails = () => {
  try {
    return JSON.parse(localStorage.getItem("details"));
  } catch (error) {
    console.error(error);
  }
};

export const getCredits = () => {
  try {
    return JSON.parse(localStorage.getItem("credits")).cast;
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteFilmsId = () => {
  try {
    return JSON.parse(localStorage.getItem("favoriteFilmsId"));
  } catch (error) {
    console.error(error);
  }
};

export function getGenres() {
  try {
    const response = JSON.parse(localStorage.getItem("genres"));

    if (!response || response.success === false) {
      return [];
    }
    const formattedGenresList = response.genres.map((item) => {
      const firstChar = item.name.slice(0, 1).toUpperCase();
      const otherChars = item.name.slice(1);
      return {
        id: item.id,
        name: firstChar + otherChars,
      };
    });

    return formattedGenresList;
  } catch (error) {
    console.log(error);
  }
}

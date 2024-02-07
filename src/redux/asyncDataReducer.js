import {
  ADD_FAVORITE_FILM,
  DELETE_FAVORITE_FILM,
  LOAD_CREDITS,
  LOAD_DETAILS,
  LOAD_FAVORITE_LIST,
  LOAD_FILMS,
  LOAD_GENRES,
} from "./types";

export function asyncDataReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FILMS: {
      return {
        ...state,
        films: action.films.results.map((item) => {
          return {
            id: item.id,
            image: item.backdrop_path,
            title: item.title,
            rating: item.vote_average,
          };
        }),
      };
    }
    case LOAD_GENRES: {
      return {
        ...state,
        genres: [...action.genres],
      };
    }
    case LOAD_CREDITS: {
      return {
        ...state,
        credits: [...action.credits],
      };
    }
    case LOAD_DETAILS: {
      return {
        ...state,
        details: { ...action.details },
      };
    }
    case LOAD_FAVORITE_LIST: {
      return {
        ...state,
        favoriteList: action.favoriteList.map((item) => item.id),
      };
    }
    case DELETE_FAVORITE_FILM: {
      return {
        ...state,
        favoriteList: [...state.favoriteList].filter(
          (item) => item !== action.id
        ),
      };
    }
    case ADD_FAVORITE_FILM: {
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.id],
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  films: [],
  favoriteList: [],
  details: [],
  credits: [],
  genres: [],
};

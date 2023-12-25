import {
    ADD_FAVORITE_FILM,
    CHANGE_ACCOUNT_ID, 
    CHANGE_TOKEN, 
    DELETE_FAVORITE_FILM, 
    LOAD_CREDITS, 
    LOAD_DETAILS, 
    LOAD_FAVORITE_LIST, 
    LOAD_FILMS, 
    LOAD_GENRES, 
    RESET_FILTERS, 
    RESET_USER_CREDITS, 
    UPDATE_CHECKBOX_TAGS, 
    UPDATE_PAGE, 
    UPDATE_SEARCH_TEXT,
    UPDATE_SELECT_SORT, 
    UPDATE_SLIDER_RANGE 
} from "./types"

export function updateSliderRange(value) {
    return {
        type: UPDATE_SLIDER_RANGE,
        value,
    }
}

export function updateSelectSort(value) {
    return {
        type: UPDATE_SELECT_SORT,
        value,
    }
}

export function updateCheckboxTags(value) {
    return {
        type: UPDATE_CHECKBOX_TAGS,
        value,
    }
}

export function updateSearchText(value) {
    return {
        type: UPDATE_SEARCH_TEXT,
        value,
    }
}

export function updatePage(page) {
    return {
        type: UPDATE_PAGE,
        page,
    }
}

export function resetFilters() {
    return {
        type: RESET_FILTERS,
    }
}

export function resetUserCredits() {
    return {
        type: RESET_USER_CREDITS,
    }
}

export function changeToken(token) {
    return {
        type: CHANGE_TOKEN,
        token,
    }
}

export function changeAccountId(accountId) {
    return {
        type: CHANGE_ACCOUNT_ID,
        accountId,
    }
}

export const loadFilms = (films) => {
    return {
        type: LOAD_FILMS,
        films,
    }
}

export const loadGenres = (genres) => {
    return {
        type: LOAD_GENRES,
        genres,
    }
}

export const loadDetails = (details) => {
    return {
        type: LOAD_DETAILS,
        details,
    }
}

export const loadCredits = (credits) => {
    return {
        type: LOAD_CREDITS,
        credits,
    }
}

export const loadFavoriteList = (favoriteList) => {
    return {
        type: LOAD_FAVORITE_LIST,
        favoriteList,
    }
}

export const deleteFavoriteFilm = (id) => {
    return {
        type: DELETE_FAVORITE_FILM,
        id,
    }
}

export const addFavoriteFilm = (id) => {
    return {
        type: ADD_FAVORITE_FILM,
        id,
    }
}
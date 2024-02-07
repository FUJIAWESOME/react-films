import {
  RESET_FILTERS,
  UPDATE_CHECKBOX_TAGS,
  UPDATE_PAGE,
  UPDATE_SEARCH_TEXT,
  UPDATE_SELECT_SORT,
  UPDATE_SLIDER_RANGE,
} from "./types";

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SLIDER_RANGE: {
      return {
        ...state,
        sliderRange: action.value,
      };
    }
    case UPDATE_CHECKBOX_TAGS: {
      return {
        ...state,
        checkboxTags: action.value,
      };
    }
    case UPDATE_SELECT_SORT: {
      return {
        ...state,
        selectSort: action.value,
      };
    }
    case UPDATE_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    case UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.value,
      };
    }
    case RESET_FILTERS: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  sliderRange: [1923, 2023],
  selectSort: "Популярности",
  checkboxTags: [],
  page: 1,
  searchText: "",
};

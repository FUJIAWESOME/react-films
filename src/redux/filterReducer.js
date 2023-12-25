// import { RESET_FILTERS, UPDATE_CHECKBOX_TAGS, UPDATE_PAGE, UPDATE_SEARCH_TEXT, UPDATE_SELECT_SORT, UPDATE_SLIDER_RANGE } from "./types";

// export function filterReducer(state = initialState, action) {
//     switch (action.type) {
//         case UPDATE_SLIDER_RANGE: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     sliderRangeValue: action.value,
//                 }
//             };
//         }
//         case UPDATE_CHECKBOX_TAGS: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     checkboxTagsValue: action.value,
//                 }
//             };
//         }
//         case UPDATE_SELECT_SORT: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     selectSortValue: action.value,
//                 }
//             };
//         }
//         case UPDATE_PAGE: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     page: action.page,
//                 }
//             };
//         }
//         case UPDATE_SEARCH_TEXT: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     searchText: action.value,
//                 }
//             };
//         }
//         case RESET_FILTERS: {
//             return {
//                 ...state,
//                 filters: {
//                     ...initialState
//                 }
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const initialState = {
//     filters: {
//         sliderRange: [1923, 2023],
//         selectSort: 'Популярности',
//         checkboxTags: [],
//         page: 1,
//         searchText: '',
//     }
// }


import { RESET_FILTERS, UPDATE_CHECKBOX_TAGS, UPDATE_PAGE, UPDATE_SEARCH_TEXT, UPDATE_SELECT_SORT, UPDATE_SLIDER_RANGE } from "./types";

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
            }
        }
        case RESET_FILTERS: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    sliderRange: [1923, 2023],
    selectSort: 'Популярности',
    checkboxTags: [],
    page: 1,
    searchText: '',
}
// export function filterReducer(state, action) {
//     switch (action.type) {
//         case 'updateSliderRange': {
//             return {
//                 ...state,
//                 sliderRangeValue: action.value,
//             };
//         }
//         case 'updateCheckboxTags': {
//             return {
//                 ...state,
//                 checkboxTagsValue: action.value,
//             };
//         }
//         case 'updateSelectSort': {
//             return {
//                 ...state,
//                 selectSortValue: action.value,
//             };
//         }
//         case 'resetFilters': {
//             return {...initialState};
//         }
//         case 'updatePage': {
//             return {
//                 ...state,
//                 page: action.page,
//             }
//         }
//         case 'update_name': {
//             return {
//                 ...state,
//                 searchText: action.value,
//             }
//         }
//     }
// }

// export const initialState = {
//     sliderRangeValue: [1923, 2023],
//     selectSortValue: 'Популярности',
//     checkboxTagsValue: [],
//     page: 1,
//     name: '',
// }
import { useEffect } from 'react';

// import { URL, API_KEY } from '../constants';
// import { FilterContext, FilterDispatchContext } from './FilterContext';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Box from '@mui/material/Box';
// import { getGenres, requestGetGenres } from '../Requests';
import { useDispatch, useSelector } from 'react-redux';
import { updateCheckboxTags } from '../redux/actions';
import { fetchGenres } from '../redux/asyncActions';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFmNzI1MjhmZjEyOTlmNmUyNTBjZTNjYjQ4YzEzYiIsInN1YiI6IjY1NGFhYmY2NTMyYWNiMDBlMTRhNDhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IMA3kYwD8Sg42eExGyDss3ST2adYWUuky6EJ22yI6-A';

export default function CheckboxesTags() {
    // const [selectedItemList, setSelectedItemList] = useState([]);
    // const dispatch = useContext(FilterDispatchContext);
    // const value = useContext(FilterContext);
    const dispatch = useDispatch();

    const options = useSelector(state => state.asyncData.genres);
    // console.log('opt', getGenres())
    const checkboxTags = useSelector(state => state.filters.checkboxTags);
    // console.log(checkboxTags)

    function handleChangeInput(_, value) {
        dispatch(updateCheckboxTags(value));
        // setSelectedItemList(value);
        // dispatch({
        //     type: 'updateCheckboxTags',
        //     value: value,
        // });
    }

    function formateGenresList(options) {
        const formattedGenresList = options.map(item => {
            const firstChar = item.name.slice(0, 1).toUpperCase();
            const otherChars = item.name.slice(1);
            return {
                id: item.id,
                name: firstChar + otherChars,
            }
        });

        return formattedGenresList;
    }

    useEffect(() => {
        // requestGetGenres();
        dispatch(fetchGenres());
    }, [dispatch]);

    // function getGenres() {
    //     try {
    //         const genresList = JSON.parse(localStorage.getItem('genres')).genres;
    //         const formattedGenresList = genresList.map(item => {
    //             const firstChar = item.name.slice(0, 1).toUpperCase();
    //             const otherChars = item.name.slice(1);
    //             return {
    //                 id: item.id,
    //                 name: firstChar + otherChars,
    //             }
    //         });
    //         return formattedGenresList;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Box sx={{ padding: '16px' }}>
            <Autocomplete
                multiple
                value={checkboxTags}
                onChange={handleChangeInput}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                options={formateGenresList(options)}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Жанры" />
                )}
        />
        </Box>
    );
}
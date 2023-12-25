import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// import { FilterContext, FilterDispatchContext } from './FilterContext';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchText } from '../redux/actions';

const FilterSearch = memo(function FilterSearch() {
    // const dispatch = useContext(FilterDispatchContext);
    // const filterValue = useContext(FilterContext);
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.filters.searchText);

    function handleChangeSearchText(event) {
        dispatch(updateSearchText(event.target.value));
        // dispatch({
        //     type: 'update_name',
        //     name: event.target.value
        // });
    }

    return (
        <Box sx={{ padding: '16px'}}>
            <TextField
                value={searchText}
                label="Название фильма"
                variant="standard"
                fullWidth
                onChange={handleChangeSearchText}/>
        </Box>
    );
}
);

export default FilterSearch;
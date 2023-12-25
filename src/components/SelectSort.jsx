import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectSort } from '../redux/actions';

// import { FilterContext, FilterDispatchContext } from './FilterContext';

const SelectSort = memo(function SelectSort() {
    // console.log('render!')
    // const dispatch = useContext(FilterDispatchContext);
    // const value = useContext(FilterContext);

    // const selectValue = useMemo(() => value.selectSortValue, [value.selectSortValue]);

    const dispatch = useDispatch();
    const select = useSelector(state => state.filters.selectSort);

    function handleChange(event) {
        dispatch(updateSelectSort(event.target.textContent));
        // dispatch({
        //     type: 'updateSelectSort',
        //     value: event.target.textContent,
        // });
    }

    return (
        <Box sx={{ padding: '16px'}}>
            <Autocomplete
                value={select}
                onChange={handleChange}
                options={options}
                isOptionEqualToValue={(option, value) => option === value}
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Сортировать по:" variant="standard" />
                )}
            />
        </Box>
    );
});

const options = ['Популярности', 'Топ рейтинг'];

export default SelectSort;
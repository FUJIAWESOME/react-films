import Box from '@mui/material/Box';
import Pagination from "@mui/material/Pagination";

// import { FilterContext, FilterDispatchContext } from './FilterContext';

// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from '../redux/actions';

export default function FilmPagination() {
    // const dispatch = useContext(FilterDispatchContext);
    // const value = useContext(FilterContext);
    const dispatch = useDispatch();
    const page = useSelector(state => state.filters.page)

    function handleChange(_, page) {
        dispatch(updatePage(page));
        // dispatch({
        //     type: 'updatePage',
        //     page: page,
        // })
    }

    return (
        <Box sx={{ padding: '16px' }}>
            <Pagination count={500} color="primary" onChange={handleChange} page={page}/>
        </Box>
    );
}
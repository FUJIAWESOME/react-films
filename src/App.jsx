// import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import FilmAppBar from './components/FilmAppBar';
import FilmCardList from './components/FilmCardList';
import FilterMenu from './components/FilterMenu';
import ErrorPage from './components/ErrorPage';
import { useSelector } from 'react-redux';

// import { filterReducer, initialState } from './components/FilterReducer';
// import { FilterContext, FilterDispatchContext } from './components/FilterContext';

import Box from '@mui/material/Box';

import FilmDetails from './components/FilmDetails';
import LogsList from './components/LogsList';

function App() {
    // const [filterState, dispatch] = useReducer(filterReducer, initialState);
    const token = useSelector(state => state.user.token);

    // console.log(token)
    return (
        <>
        {/* <FilterContext.Provider value={filterState}>
            <FilterDispatchContext.Provider value={dispatch}> */}
                <Routes>
                    <Route path='/' element={
                        <>
                            <FilmAppBar title="FILMS"/>

                            {
                                token
                                && 
                                <Box sx={{ display: 'flex', gap: 2}}>
                                    <FilterMenu />
                                    <FilmCardList />
                                </Box>
                            }
                        </>
                    }
                    />
                    <Route path='/details/:id' element={<FilmDetails />} />
                    <Route path='/Logs' element={<LogsList />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            {/* </FilterDispatchContext.Provider>
        </FilterContext.Provider> */}
        </>
    );
}

export default App

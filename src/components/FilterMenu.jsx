import SelectSort from "./SelectSort";
import SliderRange from "./SliderRange";
import CheckboxesTags from "./CheckboxesTags";
import FilmPagination from "./FilmPagination";
import FilterSearch from "./FIlterSearch";
// import { FilterDispatchContext } from './FilterContext';

import Paper from "@mui/material/Paper";
// import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { resetFilters } from "../redux/actions";

function FilterMenu() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetFilters());
  }

  return (
    <Box sx={{ marginTop: 10, maxWidth: 400, ml: "15px" }}>
      <Paper elevation={10}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px",
              gap: 21,
            }}
          >
            <Typography variant="h6" color="initial">
              Фильтры
            </Typography>

            <Button variant="outlined" color="primary" onClick={handleClick}>
              Сбросить
            </Button>
          </Box>

          <FilterSearch />
          <SelectSort />
          <SliderRange />
          <CheckboxesTags />
        </Box>

        <FilmPagination />
      </Paper>
    </Box>
  );
}

export default FilterMenu;

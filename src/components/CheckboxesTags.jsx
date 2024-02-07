import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckboxTags } from "../redux/actions";
import { fetchGenres } from "../redux/asyncActions";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  const dispatch = useDispatch();

  const options = useSelector((state) => state.asyncData.genres);
  const checkboxTags = useSelector((state) => state.filters.checkboxTags);

  function handleChangeInput(_, value) {
    dispatch(updateCheckboxTags(value));
  }

  function formateGenresList(options) {
    const formattedGenresList = options.map((item) => {
      const firstChar = item.name.slice(0, 1).toUpperCase();
      const otherChars = item.name.slice(1);
      return {
        id: item.id,
        name: firstChar + otherChars,
      };
    });

    return formattedGenresList;
  }

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <Box sx={{ padding: "16px" }}>
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
        renderInput={(params) => <TextField {...params} label="Жанры" />}
      />
    </Box>
  );
}

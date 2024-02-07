import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../redux/actions";

export default function FilmPagination() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.filters.page);

  function handleChange(_, page) {
    dispatch(updatePage(page));
  }

  return (
    <Box sx={{ padding: "16px" }}>
      <Pagination
        count={500}
        color="primary"
        onChange={handleChange}
        page={page}
      />
    </Box>
  );
}

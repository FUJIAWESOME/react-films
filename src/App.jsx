import { Route, Routes } from "react-router-dom";

import FilmAppBar from "./components/FilmAppBar";
import FilmCardList from "./components/FilmCardList";
import FilterMenu from "./components/FilterMenu";
import ErrorPage from "./components/ErrorPage";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import FilmDetails from "./components/FilmDetails";

function App() {
  const token = useSelector((state) => state.user.token);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilmAppBar title="FILMS" />

              {token && (
                <Box sx={{ display: "flex", gap: 2 }}>
                  <FilterMenu />
                  <FilmCardList />
                </Box>
              )}
            </>
          }
        />
        <Route path="/details/:id" element={<FilmDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

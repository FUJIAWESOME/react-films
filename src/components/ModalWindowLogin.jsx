/* eslint-disable react/prop-types */
import { useState } from "react";

import Cookie from "js-cookie";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { API_KEY } from "../constants";
import { useDispatch } from "react-redux";
import { changeAccountId, changeToken } from "../redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function ModalWindowLogin() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton size="large" color="inherit" onClick={handleOpen}>
        <AccountCircle />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" component="h2">
            Запросить токен
          </Typography>
          <Box component="form">
            <TextField
              type="email"
              label="Почта"
              variant="standard"
              fullWidth
              sx={{ mb: "13px" }}
            />
            <ModalWindowAcceptToken setOpenParentModal={setOpen} />
          </Box>
          <Button sx={{ mt: "13px" }} variant="contained" onClick={handleClose}>
            Закрыть
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

function ModalWindowAcceptToken({ setOpenParentModal }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [token, setToken] = useState("");

  function handleChange(event) {
    setToken(event.target.value);
  }

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(changeToken(API_KEY));
    dispatch(changeAccountId(20677684));

    Cookie.set("apiKey", API_KEY);
    Cookie.set("accountId", 20677684);

    setOpen(false);
    setOpenParentModal(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Получить токен
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Введите токен
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              label="Токен"
              variant="standard"
              fullWidth
              sx={{ mb: "13px" }}
            />
            <Button variant="contained" type="submit">
              Отправить токен
            </Button>
          </Box>
          <Button sx={{ mt: "13px" }} variant="contained" onClick={handleClose}>
            Отмена
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalWindowLogin;

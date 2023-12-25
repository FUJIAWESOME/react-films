import FilmAppBar from "./FilmAppBar";
import { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

const LogsList = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState({ method: '', url: '', status: '' });

  useEffect(() => {
    fetch(`http://localhost:4444/logs?method=${filter.method}&url=${filter.url}&status=${filter.status}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTZlZTU1MTk5ZDU3NzZkZWNmNGIzNmUiLCJpYXQiOjE3MDI5MzM5NTAsImV4cCI6MTcwNTUyNTk1MH0.WyX-6LANjA8ZJeIRAfXNSM4EmXtiC5hlyqt2A5EhdlE`,
      },
    })
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => console.error('Error fetching logs:', error));
  }, [filter]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
    <>
      <FilmAppBar title='FILMS Логи' />
      <TextField
        label="Метод"
        name="method"
        value={filter.method}
        onChange={handleFilterChange}
        sx={{ margin: '10px', mt: "80px" }}
      />
      <TextField
        label="URL"
        name="url"
        value={filter.url}
        onChange={handleFilterChange}
        sx={{ margin: '10px', mt: "80px" }}
      />
      <TextField
        label="Статус"
        name="status"
        type="number"
        value={filter.status}
        onChange={handleFilterChange}
        sx={{ margin: '10px', mt: "80px" }}
      />
      <TableContainer component={Paper} sx={{ mt: "10px", p: "10px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1e88e5' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Метод</TableCell>
              <TableCell sx={{ color: '#fff' }}>URL</TableCell>
              <TableCell sx={{ color: '#fff' }}>Статус</TableCell>
              <TableCell sx={{ color: '#fff' }}>Дата и Время</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log._id}>
                <TableCell>{log.method}</TableCell>
                <TableCell>{log.url}</TableCell>
                <TableCell>{log.status}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LogsList;

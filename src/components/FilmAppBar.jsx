/* eslint-disable react/prop-types */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ModalWindowLogin from './ModalWindowLogin';

export default function FilmAppBar({ title }) {
    const router = useNavigate();

    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                <Typography
                        onClick={() => router('/')}
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            cursor: 'pointer',
                            userSelect: 'none',
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        {title}
                    </Typography>

                    <ModalWindowLogin />
                    
                </Toolbar>
            </AppBar>
        </>
    );
}
// components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // update with real auth logic later

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          AQIverse
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

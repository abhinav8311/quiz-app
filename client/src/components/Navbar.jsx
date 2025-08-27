// components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1rem', color: '#111' }}>Welcome,</span>
            <span style={{ fontWeight: 600, color: '#111' }}>{user.name}</span>
            <span style={{
              width: 36,
              height: 36,
              background: '#646cff',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              fontWeight: 700
            }}>
              {user.name ? user.name.charAt(0).toUpperCase() : "T"}
            </span>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

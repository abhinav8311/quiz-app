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
          sx={{
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
            fontWeight: 900,
            letterSpacing: 2,
            fontSize: '2rem',
            textShadow: '0 0 2px #3f3f3fff, 0 0 4px #696969ff',
            WebkitTextStroke: '1.1px #f5f5f5',
            padding: '0.2rem 0',
          }}
          onClick={() => {
            if (user && user.role === "teacher") {
              navigate("/dashboard/teacher");
            } else if (user && user.role === "student") {
              navigate("/dashboard/student");
            } else {
              navigate("/");
            }
          }}
        >
          AIQverse
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


import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      {/* Animated split heading */}
      <div style={{ marginBottom: '2.5rem' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            color: '#222',
            animation: 'fadeInDown 1s',
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
          }}
          className="animated-heading"
        >
          Welcome to
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            color: '#646cff',
            letterSpacing: 3,
            mt: 1,
            animation: 'fadeInUp 1.2s',
            fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem' },
          }}
          className="animated-heading"
        >
          AIQverse
        </Typography>
      </div>

      {/* Animated and larger buttons */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => navigate('/register/teacher')}
          sx={{
            px: 5, py: 2, fontSize: '1.3rem', fontWeight: 700, borderRadius: 3,
            boxShadow: 3,
            transition: 'transform 0.2s, background 0.2s',
            background: '#646cff',
            '&:hover': { background: '#4b4be6', transform: 'scale(1.08)' },
            animation: 'popIn 1.2s',
          }}
        >
          I’M A TEACHER
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate('/register/student')}
          sx={{
            px: 5, py: 2, fontSize: '1.3rem', fontWeight: 700, borderRadius: 3,
            boxShadow: 3,
            borderColor: '#646cff', color: '#646cff',
            transition: 'transform 0.2s, border 0.2s, color 0.2s',
            '&:hover': { borderColor: '#4b4be6', color: '#4b4be6', transform: 'scale(1.08)' },
            animation: 'popIn 1.4s',
          }}
        >
          I’M A STUDENT
        </Button>
      </div>

      {/* Animated Existing User button below */}
      <Button
        variant="text"
        onClick={() => navigate('/login')}
        sx={{
          mt: 2,
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#ffb3b3',
          background: 'transparent',
          transition: 'color 0.2s, transform 0.2s',
          '&:hover': { color: '#ff6666', transform: 'scale(1.08)' },
          animation: 'fadeInUp 1.6s',
        }}
      >
        Existing User? Login
      </Button>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.7); }
          80% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Container>
  );
};

export default LandingPage;

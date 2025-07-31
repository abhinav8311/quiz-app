import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Welcome to AQIverse</Typography>
      
       {/* LandingPage.jsx */}
      <Button
        variant="contained"
        onClick={() => navigate('/register/teacher')}
        sx={{ m: 1 }}
      >
        I’M A TEACHER
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate('/register/student')}
        sx={{ m: 1 }}
      >
        I’M A STUDENT
      </Button>

    </Container>
  );
};

export default LandingPage;

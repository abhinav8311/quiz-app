import { useState } from 'react';
import { Button, TextField, Divider, Box } from '@mui/material';

const TeacherLogin = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend for manual registration
    alert('Manual registration not implemented yet.');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 2, borderRadius: 2 }}>
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register Manually
        </Button>
      </form>
      <Divider sx={{ my: 3 }}>or</Divider>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        href="http://localhost:5000/auth/google?role=teacher"
      >
        Sign in with Google
      </Button>
    </Box>
  );
};

export default TeacherLogin;

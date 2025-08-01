import { useState } from 'react';
import { Button, TextField, Divider, Box } from '@mui/material';

const StudentLogin = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/auth/register/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Registration successful!');
        // Optionally redirect to login or dashboard
      } else {
        alert(data.error || 'Registration failed.');
      }
    } catch (err) {
      alert('Server error.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 2, borderRadius: 2 }}>
      <h2>Student Registration</h2>
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
        href="http://localhost:5000/auth/google?role=student"
      >
        Sign in with Google
      </Button>
    </Box>
  );
};

export default StudentLogin;

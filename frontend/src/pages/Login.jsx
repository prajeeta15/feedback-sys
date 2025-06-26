import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken, setRole }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/token`, 
      new URLSearchParams(form), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    const token = res.data.access_token;
    localStorage.setItem("token", token);
    setToken(token);

    // Fetch role
    const userRes = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setRole(userRes.data.role);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}

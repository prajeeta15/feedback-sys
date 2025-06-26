import React, { useState } from 'react';
import Login from './pages/Login';
import FeedbackForm from './pages/FeedbackForm';
import FeedbackHistory from './pages/FeedbackHistory';
import ManagerDashboard from './pages/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState("");

  if (!token) return <Login setToken={setToken} setRole={setRole} />;

  return (
    <div>
      <h1>Feedback Portal</h1>
      {role === "manager" && <>
        <FeedbackForm />
        <ManagerDashboard />
      </>}
      {role === "employee" && <FeedbackHistory userId={1} />}
    </div>
  );
}

export default App;

export default function Dashboard() { return <div>Dashboard</div>; }import React, { useEffect, useState } from 'react';
import API from '../services/api';
import SentimentChart from '../components/sentimentchart';

export default function ManagerDashboard() {
  const [feedback, setFeedback] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await API.get('/users/me');
      const teamRes = await API.get(`/feedback/team/${res.data.team}`);
      setFeedback(teamRes.data);
    };
    load();
  }, []);

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <SentimentChart feedback={feedback} />
      <ul>
        {feedback.map(f => (
          <li key={f.id}>
            Employee #{f.employee_id} — {f.sentiment}
          </li>
        ))}
      </ul>
    </div>
  );
}

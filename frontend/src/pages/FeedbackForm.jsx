import React, { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
  const [form, setForm] = useState({
    employee_id: '',
    strengths: '',
    improvements: '',
    sentiment: 'positive'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    alert("Feedback submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <input placeholder="Employee ID" onChange={(e) => setForm({ ...form, employee_id: e.target.value })} />
      <textarea placeholder="Strengths" onChange={(e) => setForm({ ...form, strengths: e.target.value })}></textarea>
      <textarea placeholder="Areas to Improve" onChange={(e) => setForm({ ...form, improvements: e.target.value })}></textarea>
      <textarea placeholder="Comments (Markdown supported)"
  onChange={(e) => setForm({ ...form, comments: e.target.value })}
/>
<ReactMarkdown>{form.comments}</ReactMarkdown>
      <select onChange={(e) => setForm({ ...form, sentiment: e.target.value })}>
        <option value="positive">Positive</option>
        <option value="neutral">Neutral</option>
        <option value="negative">Negative</option>
      </select>
      <button type="submit">Send Feedback</button>
    </form>
  );
}

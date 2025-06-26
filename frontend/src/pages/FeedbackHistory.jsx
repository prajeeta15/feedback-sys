import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import API from '../services/api';

export default function FeedbackHistory({ userId }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get(`/feedback/history/${userId}`)
      .then(res => setHistory(res.data))
      .catch(err => console.error("Error loading feedback:", err));
  }, [userId]);

  const exportPDF = () => {
    const input = document.getElementById("feedback-section");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save("feedback-history.pdf");
    });
  };

  return (
    <div>
      <h2>Feedback History</h2>
      <button onClick={exportPDF}>Export as PDF</button>
      <div id="feedback-section">
        {history.length === 0 && <p>No feedback found.</p>}
        {history.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
            <p><strong>Strengths:</strong> {item.strengths}</p>
            <p><strong>Areas to Improve:</strong> {item.improvements}</p>
            <p><strong>Sentiment:</strong> {item.sentiment}</p>
            {item.comments && (
              <div>
                <strong>Comments:</strong>
                <ReactMarkdown>{item.comments}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

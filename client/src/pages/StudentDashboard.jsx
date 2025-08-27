

import React, { useState } from "react";

const mockQuizzes = [
  {
    id: "quiz1",
    title: "Math Quiz",
    date: "2025-08-20",
    code: "MATH123",
    score: 85,
  },
  {
    id: "quiz2",
    title: "Science Quiz",
    date: "2025-08-15",
    code: "SCI456",
    score: 92,
  },
];

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizzes, setQuizzes] = useState(mockQuizzes);
  const [quizCode, setQuizCode] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleJoinQuiz = () => {
    // Implement join quiz logic here
    alert(`Joining quiz with code: ${quizCode}`);
    setQuizCode("");
  };

  return (
    <div className="student-dashboard">
      {/* Sidebar/Menu */}
      <div className={`sidebar${menuOpen ? " open" : ""}`}> 
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {menuOpen && (
          <div className="menu-list">
            <button className="menu-btn">Quizzes</button>
            <button className="menu-btn">Scores</button>
            <button className="menu-btn">Ask AI</button>
            <button className="menu-btn logout-btn" onClick={handleLogout}>Log out</button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Enter code for new quiz panel */}
        <div className="join-quiz-panel card">
          <h3>Enter Code for a New Quiz</h3>
          <input
            type="text"
            value={quizCode}
            onChange={e => setQuizCode(e.target.value)}
            placeholder="Enter quiz code"
            style={{ padding: "0.5rem", fontSize: "1rem", marginRight: "1rem" }}
          />
          <button onClick={handleJoinQuiz}>Join Quiz</button>
        </div>

        {/* Recent Quizzes */}
        <div className="recent-quizzes card">
          <h3>Recent Quizzes</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {quizzes.map((quiz) => (
              <li key={quiz.id} className="quiz-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong>{quiz.title}</strong> <br />
                    Date: {quiz.date} <br />
                    Code: <span style={{ fontWeight: 600 }}>{quiz.code}</span> <br />
                    Score Obtained: <span style={{ color: "#1976d2", fontWeight: 600 }}>{quiz.score}</span>
                  </div>
                  <button style={{ marginLeft: "2rem" }}>Open Quiz</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Simple styles for dashboard */}
      <style>{`
        .student-dashboard {
          display: flex;
          min-height: 80vh;
        }
        .sidebar {
          min-width: 60px;
          background: #d6ccc2;
          color: #111;
          padding: 1rem 0.5rem;
          position: relative;
        }
        .menu-toggle {
          background: none;
          border: none;
          color: #111;
          font-size: 2rem;
          cursor: pointer;
        }
        .menu-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .menu-btn {
          background: #e5e5e5;
          color: #111;
          font-size: 1.1rem;
          border: none;
          border-radius: 6px;
          padding: 0.7rem 1.2rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .menu-btn:hover {
          background: #d6ccc2;
        }
        .logout-btn {
          color: red;
        }
        .main-content {
          flex: 1;
          padding: 2rem;
        }
        .card {
          background: #d6ccc2;
          color: #000000;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
          padding: 1.5rem;
          text-align: left;
        }
        .quiz-item {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #333;
          padding-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default StudentDashboard;

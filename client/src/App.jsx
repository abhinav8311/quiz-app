import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import CreateQuiz from './pages/CreateQuiz';
import JoinQuiz from './pages/JoinQuiz';
import TeacherLogin from './pages/TeacherLogin';
import StudentLogin from './pages/StudentLogin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/join-quiz" element={<JoinQuiz />} />
        <Route path="/register/teacher" element={<TeacherLogin />} />
        <Route path="/register/student" element={<StudentLogin />} />
      </Routes>
    </>
  );
}

export default App;

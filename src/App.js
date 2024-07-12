import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/auth/Loginpage/LoginPage';
import GradingAssistant from './Pages/GradingAssistant/GradingAssistant';
import ModifyAssignmentPage from './Pages/ModifyAssignmentPage/ModifyAssignmentPage';
import IndividualEvaluationReport from './Pages/IndividualEvaluationReport/IndividualEvaluationReport';
import EvaluationReportPage from './Pages/EvaluationReportPage/EvaluationReportPage';

const isAuth = () => localStorage.getItem('authToken') !== null;

const PrivateRoute = ({ element }) => isAuth() ? element : <Navigate to="/login" replace />;

const routes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/grading-assistant', element: <GradingAssistant /> },
  { path: '/modify-assignment', element: <ModifyAssignmentPage /> },
  { path: '/individual-evaluation', element: <IndividualEvaluationReport /> },
  { path: '/evaluation-report', element: <EvaluationReportPage /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={path === '/login' ? element : <PrivateRoute element={element} />} />
        ))}
        <Route path="*" element={<Navigate to={isAuth() ? '/grading-assistant' : '/login'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
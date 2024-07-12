import logo from './logo.svg';
import './App.css';
import GradingAssistant from './Pages/GradingAssistant/GradingAssistant';
import ModifyAssignmentPage from './Pages/ModifyAssignmentPage/ModifyAssignmentPage';
import EvaluationReportPage from './Pages/EvaluationReportPage/EvaluationReportPage';
import IndividualEvaluationReport from './Pages/IndividualEvaluationReport/IndividualEvaluationReport';
// import LoginPage from './Pages/auth/Loginpage/LoginPage';


function App() {
  return (
    <div className="App">
     {/* <LoginPage></LoginPage> */}
     <IndividualEvaluationReport></IndividualEvaluationReport>
     <EvaluationReportPage></EvaluationReportPage>
    </div>
  );
}

export default App;

import "./App.css";
// import SurveyForm from "./components/SurveyForm";
import SurveyForm from "./components/SurveyFormFunctional";

function App() {
  return (
    <div className="App">
      <SurveyForm
        question={"Would you recommend PHZ Full Stack as an employer?"}
      />
    </div>
  );
}

export default App;

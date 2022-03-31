import "./App.css";
// import SurveyForm from "./components/SurveyForm";
import SurveyForm from "./components/SurveyFormFunctional";

function App() {
  return (
    <div className="App">
      <SurveyForm
        question={
          "How likely are you to recommend Team Glory to your friends and family?"
        }
      />
    </div>
  );
}

export default App;

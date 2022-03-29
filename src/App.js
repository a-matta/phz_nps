import logo from "./logo.svg";
import "./App.css";
// import SurveyForm from "./components/SurveyForm";
import SurveyForm from "./components/SurveyFormFunctional";

function App() {
  return (
    <div className="App">
      <SurveyForm company={"PHZ"} />
    </div>
  );
}

export default App;

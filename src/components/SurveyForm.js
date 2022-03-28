import React, { Component } from "react";
import axios from "axios";

// Styling
import surveyFormStyles from "./surveyform.module.css";

// Icons
import { AiOutlineClose } from "react-icons/ai";

export class SurveyForm extends Component {
  state = {
    choice: "",
    surveyResult: "",
    message: "",
    country: "",
    ip: "",
    browser: "",
    platform: "",
    createdAt: "",
  };

  getData = async () => {
    // IP retrieval
    const res = await axios.get("https://geolocation-db.com/json/");
    // Browser Data
    const userAgentData = navigator.userAgentData;
    //
    const createdAt = new Date().toISOString();
    // Setting Data
    this.setState({
      ip: res.data.IPv4,
      country: res.data.country_name,
      browser: userAgentData.brands[2].brand,
      platform: userAgentData.platform,
      createdAt: createdAt,
    });
  };

  futureDate = () => {
    let date = new Date();
    date.setDate(date.getDate() + 30);
    let expires = "expires=" + date.toUTCString();
    return expires;
  };

  handleChoice = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.textContent,
      },
      () => {
        this.convertToScore(this.state.choice);
      }
    );
    let formDiv = document.getElementById("message");
    formDiv.style.display = "block";
    let formWrapperDiv = document.getElementById("formWrapper");
    formWrapperDiv.style.height = "40vh";
  };

  handleClose = () => {
    let surveyFormDiv = document.getElementById("surveyform");
    surveyFormDiv.style.display = "none";
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button working");
    this.handleClose();
    document.cookie = `PromoterScore=${
      this.state.createdAt
    }; ${this.futureDate()}`;
  };

  convertToScore = (choice) => {
    let intChoice = parseInt(choice);
    let result = "";
    if (intChoice > 0 && intChoice <= 6) {
      result = "detractor";
    } else if (intChoice > 6 && intChoice <= 8) {
      result = "passive";
    } else {
      result = "promoter";
    }
    this.setState({
      surveyResult: result,
    });
  };

  getCookie(name) {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    let end;
    if (begin === -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) return null;
    } else {
      begin += 2;
      end = document.cookie.indexOf(";", begin);
      if (end === -1) {
        end = dc.length;
      }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  componentDidMount() {
    if (this.getCookie("PromoterScore")) {
      this.handleClose();
    }
    setTimeout(() => {
      let surveyFormDiv = document.getElementById("surveyform");
      surveyFormDiv.style.transition = "all 1s";
      surveyFormDiv.style.opacity = 1;
    }, 1000);
    this.getData();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const surveyOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div className={surveyFormStyles.container} id="surveyform">
        <div className={surveyFormStyles.surveyForm}>
          <button
            className={surveyFormStyles.closeButton}
            onClick={this.handleClose}
          >
            <span className={surveyFormStyles.closeStyle}>
              <AiOutlineClose />
            </span>
          </button>
          <div className={surveyFormStyles.mainHeading}>
            How likely are you to recommend {this.props.company} to a friend or
            colleague?
          </div>
          <div className={surveyFormStyles.gridContainer}>
            {surveyOptions.map((surveyOption) => (
              <button
                key={surveyOption}
                className={surveyFormStyles.number}
                name="choice"
                value={surveyOption}
                onClick={this.handleChoice}
              >
                {surveyOption}
              </button>
            ))}
          </div>
          <div className={surveyFormStyles.formWrapper} id="formWrapper">
            <form className={surveyFormStyles.form} id="message">
              <textarea
                name="message"
                className={surveyFormStyles.message}
                placeholder="Please add some feedback"
                onChange={this.handleChange}
              ></textarea>
              <button
                className={surveyFormStyles.submitButton}
                type="submit"
                onClick={this.handleSubmit}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyForm;

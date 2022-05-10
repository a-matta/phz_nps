import React, { useEffect, useRef, useState } from "react";

// Backend
import { firebaseUpload } from "../backend/firebase-functions";
// Styling
import surveyFormStyles from "./surveyform.module.css";

// Icons
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

// Helper functions
import { futureDate, getData, handleClose, convertToScore, getCookie, colorChange } from "./helperFunctions";

export default function SurveyFormFunctional(props) {
  // Hooks
  const [choice, setChoice] = useState("");
  const [surveyResult, setSurveyResult] = useState("");
  const [message, setMessage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [hover, setHover] = useState(null);
  const [allData, setAllData] = useState({});
  const [notificationActive, setNotificationActive] = useState(false);
  const [rating, setRating] = useState(null);
  // const [platform, setPlatform] = useState("");
  // const [browser, setBrowser] = useState("");
  // const [country, setCountry] = useState("");
  // const [ip, setIp] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const errorMessage = "Enter valid characters for ex. a-z, A-Z, 1-10 etc";

  // Functions

  const handleChoice = (option) => {
    setChoice(option);
    setRating(option);
    convertToScore(option);
    setSurveyResult(convertToScore);
    let formDiv = document.getElementById("message");
    formDiv.style.display = "flex";
    formDiv.style.flexDirection = "column";
    formDiv.style.justifyContent = "center";
    formDiv.style.alignItems = "center";

    let formWrapperDiv = document.getElementById("formWrapper");
    formWrapperDiv.style.height = "20vh";
    setCreatedAt(getData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    // creating cookie
    const cookieExpiry = futureDate()
    document.cookie = `PromoterScore=${createdAt}; ${cookieExpiry}`;
    setAllData({
      choice: choice,
      surveyResult: surveyResult,
      message: message,
      createdAt: createdAt,
    });
    setNotificationActive(true);
    setTimeout(() => {
      let notificationDiv = document.getElementById("fadeOut");
      notificationDiv.style.transition = "all 5s";
      notificationDiv.style.opacity = 0;
    }, 1000);
  };

  const handleMessageChange = (text) => {
    let allowedChars = /^[A-Za-z0-9_,!.?]+(\s+[A-Za-z0-9_,!.?]+)*$/g;
    let newText = text.trim();
    if (newText.match(allowedChars)) {
      setMessage(newText);
      setDisabled(false);
      setDisplayError(false);
    } else {
      setDisabled(true);
      setDisplayError(true);
    }
    if (newText === "") {
      setDisabled(false);
      setDisplayError(false);
    }
  };

  useEffect(() => {
    if (getCookie("PromoterScore")) {
      handleClose();
    }
    setTimeout(() => {
      let surveyFormDiv = document.getElementById("surveyform");
      surveyFormDiv.style.transition = "all 1s";
      surveyFormDiv.style.opacity = 1;
    }, 1000);
    firebaseUpload(allData);
  }, [allData]);

  return (
    <>
      <div className={surveyFormStyles.container} id="surveyform">
        <h1 className={surveyFormStyles.notSupported}>Not Supported</h1>
        <div className={surveyFormStyles.surveyForm}>
          <button
            className={surveyFormStyles.closeButton}
            onClick={(event) => handleClose(event)}
          >
            <span className={surveyFormStyles.closeStyle}>
              <AiOutlineClose className={surveyFormStyles.closeIcon} />
            </span>
          </button>
          <h4>{props.question}</h4>
          <div className={surveyFormStyles.gridWrapper}>
            <div className={surveyFormStyles.tagContainer1}>
              <p>Not likely at all</p>
            </div>
            <div className={surveyFormStyles.gridContainer}>
              {[...Array(10)].map((circle, i) => {
                const ratingValue = i + 1;

                return (
                  <div className="circle" key={ratingValue}>
                    <FaHeart
                      className="star"
                      value={ratingValue}
                      onClick={(event) => handleChoice(ratingValue)}
                      color={colorChange(ratingValue, choice, hover)}
                      size={50}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                    <p className={surveyFormStyles.underNumber}>
                      {ratingValue}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className={surveyFormStyles.tagContainerDefault}>
              <p>Not likely at all</p>
              <p>Extremely likely</p>
            </div>
            <div className={surveyFormStyles.tagContainer2}>
              <p>Extremely likely</p>
            </div>
          </div>
          <div className={surveyFormStyles.formWrapper} id="formWrapper">
            <form className={surveyFormStyles.form} id="message">
              <textarea
                name="message"
                className={surveyFormStyles.message}
                placeholder="We'd love to hear your feedback"
                onChange={(event) => handleMessageChange(event.target.value)}
              ></textarea>
              <button
                className={surveyFormStyles.submitButton}
                type="submit"
                onClick={(event) => handleSubmit(event)}
                data-testid="button"
                disabled={disabled}
              >
                Send
              </button>
              {displayError && (
                <p className={surveyFormStyles.messageError}>{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      {notificationActive && (
        <div className={surveyFormStyles.notificationBox}>
          <p
            className={`fadeOut ${surveyFormStyles.notification}`}
            id="fadeOut"
          >
            Thank you!
          </p>
        </div>
      )}
    </>
  );
}

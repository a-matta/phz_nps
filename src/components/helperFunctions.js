export const getData = async () => {
    // if (ip === "") {
      // IP retrieval
    //   const res = await axios.get("https://geolocation-db.com/json/");
      // Browser Data
    //   const userAgentData = navigator.userAgentData;
      //
      const createdAt = new Date().toISOString();
      // Setting Data
    //   setIp(res.data.IPv4);
    //   setCountry(res.data.country_name);
    //   setBrowser(userAgentData.brands[2].brand);
    //   setPlatform(userAgentData.platform);
      return createdAt;
    // }
  };

  export const futureDate = () => {
    let date = new Date();
    date.setDate(date.getDate() + 30);
    let expires = "expires=" + date.toUTCString();
    return expires;
  };

  export const handleClose = () => {
    let surveyFormDiv = document.getElementById("surveyform");
    surveyFormDiv.style.display = "none";
  };

  export const convertToScore = (choice) => {
    let intChoice = parseInt(choice);
    let result = "";
    if (intChoice > 0 && intChoice <= 6) {
      result = "detractor";
    } else if (intChoice > 6 && intChoice <= 8) {
      result = "passive";
    } else {
      result = "promoter";
    }
   return result;
  };

  export const getCookie = (name) => {
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
  };

  export const colorChange = (ratingValue, choice, hover) => {
    if (ratingValue <= choice) {
      return "coral";
    } else if (ratingValue <= hover) {
      return "#fbceb1";
    } else {
      return "white";
    }
  };
  
let x = "11122 ?,!";

//let allowedChars = /^[\w\s]*$/g;
let allowedChars = /^[a-zA-Z0-9\d ,.!?]*$/g;
if (x.match(allowedChars)) {
  console.log("match success");
} else {
  console.log("Failed");
}

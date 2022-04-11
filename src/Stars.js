// import React, { useState, useEffect } from "react";
// import { FaStar } from 'react-icons/fa';
// import { IoIosCloseCircleOutline }  from 'react-icons/io'

// const Stars = () => {
//     const [rating, setRating] = useState(null);
//     const [hover, setHover] = useState(null);
//     const [choice, setChoice] = useState('');
//     const [result, setResult] = useState('');
//     const [submit, setSubmit] = useState(false);
//     const [text, setText] = useState('');

//     const closeHandler = () => {
//         setTimeout(()=> {document.getElementById('container').style.display = 'none'}, 3000);
//         console.log(choice, result, text)
//     }
    
//     const closePopup = () => {
//         document.getElementById('container').style.display = 'none';
//     }

//     const score = (e) => {
//         const inputDiv = document.getElementById('textarea')
//         inputDiv.style.display = 'block';
//         setChoice(e.target.value)
//         setResult(resultCalc(e.target.value))
//         setRating(e.target.value)
//     }

//     const resultCalc = (choice) => {
//         let intScore = parseInt(choice);
//         let resultScore;
//         if(intScore >= 1 && intScore <= 6){
//             resultScore = 'detractor'
//         }
//         else if(intScore >=7 && intScore <=8) {
//             resultScore = 'passive'
//         }
//         else {
//             resultScore = 'promoter'
//         }
//         return resultScore;
//     }

//     const ThankYou = () => {
//         return (<div className="thankyou" id="thankyou">
//         <h4>Thank you for your feedback!</h4>
//         </div>)
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             let containerDiv = document.getElementById('container')
//             containerDiv.style.transition = 'all 1s'
//             containerDiv.style.opacity = 0.9
//         }, 1000)
//     }, [choice, result]);

//     return (
//     <div className="container" id="container">
//         <button className="close" onClick={closePopup}><span>{
//             <IoIosCloseCircleOutline 
//             size={40}
//             />}</span></button>
//         <header>
//         <h3 id="h3">How likely are you to recommend PHZ to a friend or colleague?</h3>
//         </header>
//         <div className="wrapper" id="wrapper">
//         {[...Array(10)].map((star, i) => {
//             const ratingValue = i + 1;

//             return (
//                 <div className="starz" key={ratingValue}>
//                     <label>
//                     <input 
//                         type="radio" 
//                         name="rating" 
//                         value={ratingValue} 
//                         onClick={score}
//                         />
//                     <FaStar 
//                         className="star" 
//                         color={ratingValue <= (hover || rating) ? "#fcffa4" : "#e4e5e9"}
//                         size={70}
//                         onMouseEnter={() => setHover(ratingValue)}
//                         onMouseLeave={() => setHover(null)} 
//                         />
//                     </label>
//                 </div>
//             );
//         })}
//         </div>
       
//         <div id="textarea">
//             <div className="textytext">
//                 <p>Please provide comments to help explain your selection</p>
//             <div className="inputfield" >
//                 <textarea className="text" onChange={event => setText(event.target.value)}></textarea>
//             </div>
//             <div>
//                 <button type="submit" className="submit" onClick={() => {
//                      setSubmit(!submit)
//                      closeHandler()
//                      }}>Submit</button>
//             </div>
//         </div>
//         </div>
//         <>
//         {submit ? <ThankYou></ThankYou> : <div></div> }
//         </>
//     </div>
    
//     );
// };

// export default Stars
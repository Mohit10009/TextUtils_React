import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase !", "success" );
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase !", "success" )

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared !", "success" )

  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Auto read enabled !", "success" )

  };

  // const handleTrimClick = () => {
  //   let newText = text.trim();
  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writtenText(text.value);
    props.showAlert("Copied to Clipboard!", "success" )

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed !", "success" )

  };

  const [text, setText] = useState("");

  // text = "new text" --> this is wrong way to change the state
  //to update our text or message
  //setText("mohit kumar");  --> correct way to change the state

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading} </h1> 
        <div className="mb-3">
          <textarea className="form-control"  value={text} onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#595b68':'white',
             color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8" ></textarea>
        </div>
        
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}> Convert to lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text  </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleTrimClick}> Trim </button> */}
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2"> Speak </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textbox to preview it here"}</p>
      </div>
    </>
  );
}

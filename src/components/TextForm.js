import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  const[text, setText] = useState('');
//   text = "new text";  // wrong way to update the text, can be update using ssetText function only

const handleUpClick = () => {
    console.log("handleUpClick clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "Success");
}

const handleLowClick = () => {
    console.log("handleLowClick clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "Success");
}

const handleRevClick = () => {
    console.log("handleRevClick clicked");
    let str = text.split(" ");
    str = str.reverse();
    let newText = str.toString().replaceAll(",", " ");
    setText(newText);
    props.showAlert("Text is reversed!", "Success");
}

const handleClrClick = () => {
    console.log("handleClrClick clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "Success");
}

const handleOnChange = (event) => {
    console.log("handleOnChange clicked");
    setText(event.target.value);
}

const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "Success");
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed!", "Success");
}

  return (
    
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light'?'white':'grey', color: props.mode=== 'light'?'black':'white'}}></textarea>
            <br />
            <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert to Lower case</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleRevClick}>Reverse</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy to clipboard</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleClrClick}>Clear text</button>
            <button className="btn btn-primary mx-3 my-3" onClick={speak}>Speak</button>
        </div>
    
        <h1>Your text summary</h1>
        <p>{text.length===0?0:text.trim().split(/\s+/).length} words and {text.replace(/\s/g, '').length} characters</p>
        <h2>Preview</h2>
        <p>{`${text.length<1?'Enter somthing above to preview herE':text}`}</p>
    </div>
    
  )
}

import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    } 
    const handleLoClick = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    } 
    const handleClearClick = () => {
        
        let newText = ''; 
        setText(newText) 
    } 


    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
        
    }
     
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("converted to case", "success");
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
        props.showAlert("extra space removed ","success");
    }

const  [text, setText] = useState('');
    //text = "new text" //wrong way
    //setText = ("new"); //correct
  return (
    <>
    <div className = "container" style={{color: props.mode === 'white'? 'black': 'white'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <textarea className="form-control" id="myBox" rows="3" style="background-color:white" color: " white" ></textarea> */}
        <textarea className="form-control" value= {text} onChange = {handleOnChange} style= {{backgroundColor: props.mode === 'dark'? 'grey': 'white', color: props.mode === 'dark'? 'white': '#042743'}}  id="myBox" rows="3"></textarea>
        </div>
        <button className = "btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button className = "btn btn-primary mx-2 my-2" onClick = {handleClearClick}> Clear Text</button>
        <button className = "btn btn-primary mx-2 my-2" onClick = {handleCopy}> Copy Text</button>
        <button className = "btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces}> Remove extra spaces  </button>
        </div>
        <div className="container my-2" style={{color : props.mode==='dark' ? 'white':'#042743'}}>
            <h2>Your text summaeu</h2>
            <p>{text.split(" ").length} words and  {text.length} char</p>
            <p>{0.008* text.split(" ").length} Minutes Read </p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"enter something to priview it here "}</p>
        </div>

    </>
  );
}

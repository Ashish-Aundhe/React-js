import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = (event) => {
        // console.log("On change");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy = () => {
        console.log ("i am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState("Enter text here2");
    //text = "new text"; // wrong  way to change the state
    // setText("new text"); //corrrect way to change the state
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-3">
                <h1>Your text summery</h1>
                <p>{text.split(" ").length}word and{text.length} character </p>
                <p>{0.000 * text.split(" ").length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>    
        </>
    )
}

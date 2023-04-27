import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convertes to Uppercase", "success");
    }
    const handleLoClick = (event) => {
        // console.log("On change");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convertes to Lowercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
        
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space removed", "success");
    }
    const handleCopy = () => {
        console.log ("i am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const [text, setText] = useState("Enter text here2");
    //text = "new text"; // wrong  way to change the state
    // setText("new text"); //corrrect way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode===`dark`?`white`:`#042743`}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode===`dark`?`grey`:`white`, color: props.mode=== 'dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode===`dark`?`white`:`#042743`}} >
                <h1>Your text summery</h1>
                <p>{text.split(" ").length}word and{text.length} character </p>
                <p>{0.000 * text.split(" ").length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
            </div>    
        </>
    )
}

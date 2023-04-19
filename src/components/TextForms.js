import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText("newText")
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here2");
    //text = "new text"; // wrong  way to change the state
    // setText("new text"); //corrrect way to change the state
    return ( 
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    );
}

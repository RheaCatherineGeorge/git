import React, { useState } from 'react'

export default function TextForm(props) {
    const handleChange = (event) => {
        //  console.log("on change" + text);
        setText(event.target.value)
    }
    const click = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const clickme = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to LowerCase", "success");
    }
    const clearText = () => {
        let newText3 = '';
        setText(newText3);
        props.showAlert("Text is cleared", "success");
    }
    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied", "success");
    }
    const trim = () => {
        let newText3 = text.replace(/\s+/g, ' ').trim();
        setText(newText3);
        props.showAlert("Removed extra space", "success");
    }

    const [text, setText] = useState('');
    // text="hello worlf"; //Wrong way to change the text
    // setText=("change here");//Correct way to change the text
    return (
        <>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor:props.mode === 'light'?'white':'grey', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-2" onClick={click}>Convert to Uppercase</button>
                <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2" onClick={clickme}>Convert to Lowercase</button>
                <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2" onClick={copy}>Copy Text</button>
                <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
                <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2" onClick={trim}>Remove extra space</button>
            </div>
            <div className="container"style={{ color: props.mode==='light'?'black':'white' }}>
            <h3 className="my-2">Summary of Text</h3>
            <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Enter something in the textbox to preview it here"}</p>
            </div>
        </>
    )
}

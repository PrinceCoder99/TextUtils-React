import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        {text.length>0?props.showAlert("Text has been changed to Uppercase", "success"):props.showAlert("Text box is empty", "warning")}
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        {text.length>0?props.showAlert("Text has been changed to Lowercase", "success"):props.showAlert("Text box is empty", "warning")}
    }

    const handleCopy = () =>{
        var text = document.getElementById("myForm");
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copy to clipboard!", "success")
    }

    const handleClearClick = () =>{
        let newText = ''
        setText(newText)
        {text.length>0?props.showAlert("Text cleared", "success"):props.showAlert("Text box is empty", "warning")}
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
        <h1 id='textboxh1' style={{color: props.mode==="light"?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myForm" style={{backgroundColor: props.mode==="light"?'white':'black', color:props.mode==='light'?'black':'white'}} rows="8" value={text} onChange={handleOnChange}></textarea>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Change to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Change to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container summaryContainer" style={{color: props.mode==="light"?'black':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

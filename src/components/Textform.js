import React, { useState } from "react";

export default function Textform(props) {
  
  const [text, setText] = useState("");
  
  const upclicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UPPERCASE","success")
  };
  const loclicked = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")
  };
  const clearclicked = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All cleared","danger")
  };
  
  const handleCopy=()=>{
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Message copied","success")
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white',
    }}>
        <h1 className="heading-h1">{props.text}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="12"
            style={{backgroundColor: props.mode==='light'?'#161111':'white', 
            color: props.mode==='light'?'white':'black'}}
          ></textarea>
        </div>
        
        <button className="btn btn-primary mx-1" onClick={upclicked}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={loclicked}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearclicked}>
          Clear all
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
        handleCopy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        handleExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white',
    }}>
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters</p>
        <h3>Text preview</h3>
        <p>{text.length>0?text:"Enter your text"}</p>
       
      </div>
     
    </>
  );
}

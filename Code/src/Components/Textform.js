import React, {useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const countWords = () => {
        const words = text.split(/\s+/);
        return words.filter(word => word !== '').length;
      };

      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const Clear = () => {
        setText("");
      }

  return (
    <>
      <div className="container">
      <h2 className="my-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" rows="8" onChange={handleOnChange} cols="10" value={text} placeholder="Enter your text here..." />
      </div>
      <button className="btn btn-primary" onClick={handleUpCase}>UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoCase}>LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={speak}>Speech</button>
      <button className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>No. of Character = {text.length}<br/>No. of Words = {countWords()}<br/>Time to read = {countWords()*0.008} Minutes</p>   
        <h2>Preview</h2>
        <p>{text}</p>     
      </div>
    </>
  );
}

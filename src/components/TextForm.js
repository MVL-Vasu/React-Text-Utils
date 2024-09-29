import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

    const ConvertUpCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const ConvertLoCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    };

    const RemovePunc = () => {
        let newtext = "";
        for (let char of text) {
            let punctuation = `!()-[]{};:'",<>./?@#$%^&*_~\\`;
            if(!punctuation.includes(char)) {
                newtext += char;
            }
        }
        setText(newtext);
    };

    const RemoveNewLine = () => { 
        let newtext = "";
        for (let char of text) {
            if( char !== "\n" && char!=="\r" )
            {
                newtext += char;
            }
        }
        setText(newtext);
    };

    const RemoveExtraWS = () => {
        let newtext = "";
        
        for (let i = 0; i < text.length; i++) {
            if( text[i] !== " " && text[i+1] !== " "){
                newtext += text[i];
            }            
        }
        setText(newtext);
    };

    const handleonchange = (e) => {
        setText(e.target.value)
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">{props.heading}</label>
                    <textarea className={`form-control border-2 text-bg-${props.mode}`} value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
                </div>
                <div className="buttons d-flex justify-content-around gap-3 flex-wrap">
                    <button className="btn btn-primary" onClick={ConvertUpCase}>Convert To Uppercase </button>
                    <button className="btn btn-secondary" onClick={ConvertLoCase}>Convert To LowerCase </button>
                    <button className="btn btn-success" onClick={RemovePunc}>Remove Punctuations </button>
                    <button className="btn btn-success" onClick={RemoveNewLine}>Remove NewLines </button>
                    <button className="btn btn-warning" onClick={RemoveExtraWS}>Remove Extra White-Sapce </button>
                </div>
            </div>

            <div className="container my-3">
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").filter((e) => {return e.length !== 0}).length} words and {text.length} character</p>
                <p>{0.008 * (text.split(" ").length)} Minutes Read </p>
            </div>
        </>
    );
}


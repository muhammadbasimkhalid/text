import React, { useState } from 'react'

export default function Text(props) {
const [Text , setText] = useState("");
let handleOnChange =(event)=>{
    setText(event.target.value);


}
let capatalize = () => {
let newText= (Text.toUpperCase());
setText(newText)
props.showAlert("STRING CONVERTED TO UPPERCASE","success")

}
let Normalize = () => {
    let newText= (Text.toLowerCase());
    setText(newText)
    props.showAlert("string converted to lowercase","success")
    
    } 
  let extraSpaces =()=>{
    let newtext=Text.split(/ [ ] +/);
    setText(newtext.join(" "))
    props.showAlert("Extra spaces has been removed","success")


  }
  function capitalizeSentence() {
    let words = Text.split(" ");
    let capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    let capitalizedSentence = capitalizedWords.join(" ");
    setText( capitalizedSentence);
    props.showAlert("Every First Letter Of Sentence Has Been Capatilize","success")
  }
let copy =()=>{
  var text = document.getElementById("floatingTextarea");
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
}
let customcolor=()=>{
  let color = prompt("which color do you want the text to be?");
  let doc = document.getElementById("floatingTextarea");
  doc.style.color = color
  setText( doc.value)
  props.showAlert(`Colour changed to ${color}`,"success")
  
}
return (
    <div>
      <div className="form-floating">
        <h1 className={`text-${props.mode === 'light'? 'dark':'light'}`}>Enter Your text to be analysed</h1>
        <textarea className="form-control" value={Text} placeholder="Enter Some Text" style={{backgroundColor:props.mode==='dark'?'dark':'white'}} row ="8" onChange={handleOnChange} id="floatingTextarea" ></textarea>
</div>
<button type="button" onClick={capatalize}  className="btn btn-primary mx-2 my-3">CAPATILAIZE</button>
<button type="button" onClick={Normalize}  className="btn btn-primary mx-2 my-3">normalize</button>
<button type="button" onClick={copy}  className="btn btn-primary mx-2 my-3">copy</button>
<button type="button" onClick={extraSpaces}  className="btn btn-primary mx-2 my-3">Extra spaces</button>
<button type="button" onClick={capitalizeSentence}  className="btn btn-primary mx-2 my-3">capatalize First Word</button>
<button type="button" onClick={customcolor}  className="btn btn-primary mx-2 my-3">Change Color</button>

    
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h2>Your text summary</h2>
     <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
     <p>{0.008 *  Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h2>Preview</h2>
     <p>{Text.length>0?Text:"Nothing to preview!"}</p>
 </div>
 </div>
  )
}

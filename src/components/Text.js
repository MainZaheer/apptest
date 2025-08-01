import React , { useState }  from 'react'


export default function Text(props) {


    const onhandleUpClick = () =>{
      // console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Convert to UperCase' , 'success');
    }

    const onhandleLwClick = () =>{
      let lowerTex = text.toLowerCase();
      setText(lowerTex);
      props.showAlert('Convert to LowerCase' , 'success');

    }

    const onChangeHandler = (event) =>{
      // console.log('on chage');
      setText(event.target.value);
      
    }

     const [text, setText] = useState("");
     

    return (
      <>
    <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <textarea className="form-control" value={text} id="text" rows="8" onChange={onChangeHandler} style={{backgroundColor: props.mode==='dark'?'#134661':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-centar my-3">

      <button className="btn btn-primary btn-sm" onClick={onhandleUpClick}>Convert to UpperCase</button>
      
      <button className="btn btn-success btn-sm" onClick={onhandleLwClick}>Convert to LowerCase</button>

    
      </div>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
       
        <p>{text === "" ? 0 : text.trim().split(" ").length} words and {text.length} character counter</p>
        <p>{ 0.008 * text.trim().split("").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text === "" ? "Enter something in the above textarea to preview it here" : text}</p>
      </div>
      
    </>
    );
}
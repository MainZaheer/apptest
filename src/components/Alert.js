import React from 'react'

function Alert(props) {


  const caplized = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    <div style={{height:"10vh"}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{caplized(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>

  )
}

export default Alert

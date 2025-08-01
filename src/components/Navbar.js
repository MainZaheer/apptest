import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger btn-sm mx-1" onClick={()=>props.colortoggleMide("red")}>Red</button>
            <button type="button" className="btn btn-warning btn-sm mx-1" onClick={()=>props.colortoggleMide("yellow")} >Yellow</button>
            <button type="button" className="btn btn-success btn-sm mx-1" onClick={()=>props.colortoggleMide('green')} >Green</button>
          </div>

            <div className={`form-check form-switch ${props.mode == "dark" ? 'text-light' : 'text-dark'} `}>
              
            <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
             
           
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>

          </div>
        </div>
      </nav>
  );
}

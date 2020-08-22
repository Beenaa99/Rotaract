

import React from 'react';
//import './App.css';
import './Projectruj.css';

const Projectr=(props)=> {
    return (
      <div className="border-0 card text-center">
          <div className="overflow">
              <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text text-secondary">{props.text}
               </p>
              <a href={props.link} className="btn btn-outline-secondary">See more</a>
          </div>
      </div>
    );
  }
  
  export default Projectr;
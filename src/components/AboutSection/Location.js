import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import'./cardStyle.css'


const Location  = props=>{
    return(
        <div className="aboutcard">
            
        <div className='card text-center'>
            <div className='overflow'>
          <img src = {props.imgsrc} className="card-img-top imglocation" width="30px" height="30px"alt="modern Design"/>
            </div>
            <div className='card-body text-dark'>
    <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.desc} </p>
            
            </div>
        </div>
        </div>
        
       
    );
}
export default Location
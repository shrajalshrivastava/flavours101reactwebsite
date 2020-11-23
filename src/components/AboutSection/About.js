import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import'./cardStyle.css'


const Card  = props=>{
    return(
        <div className="aboutcard">
            
        <div className='card text-center'>
            <div className='overflow'>
          <img src = {props.imgsrc} className="card-img-top img"  height="300px"alt="modern Design"/>
            </div>
            <div className='card-body text-dark'>
    <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.desc} </p>
            <a href="/menu"className="btn btn-outline-success">Go to Menu</a>
            </div>
        </div>
        </div>
        
       
    );
}
export default Card
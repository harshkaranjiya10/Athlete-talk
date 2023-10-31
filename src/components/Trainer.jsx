import React from 'react'

function Trainer(props) {

  return (    
        <div className="card">
        <img src={props.coverImg} className="card--image" alt="" />
            <h2>{props.title}</h2>
            <div className="card--stats">
                <img src="star.png" className="card--star" />
            <span className="gray"> {props.location}</span>
        </div>

        </div>
  )
}

export default Trainer

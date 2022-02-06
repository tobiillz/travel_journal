import React from 'react';
import '../App.css';

export default function Cards(props) {

  return <div className='card-group'>
          <img src={props.item.img} alt="various-locations"  className='card-image'/>
          <div className='card-text'>
                <span>
                  <img src="../images/fill219.png" alt="location" />
                  {props.item.location}
                  <a href="#">Views on Google map</a>
                </span>
          </div>
  </div>;
}

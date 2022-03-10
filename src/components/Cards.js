import React from 'react';
import '../App.css';

export default function Cards(props) {

  return <div className='card-group'>
          <img src={props.item.img} alt="various-locations"  className='card-image'/>
          <div className='card-text'>
                <span className='top-text'>
                  <img className="location-icon" src="../images/fill219.png" alt="location" />
                  {props.item.country}
                  <a href={props.item.link} className='links'>Views on Google map</a>
                </span>
                <h1 className='location'>{props.item.location}</h1>
                <b className='date'>{props.item.startDate} - {props.item.endDate} </b>
                <p className='description'>{props.item.description}</p>
          </div>
  </div>;
}

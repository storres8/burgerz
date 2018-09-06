import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  // console.log(props)
  return (
    <div className="BurgerDisplay">
      <img src={props.burgerDet.imgURL}/>
      <br/>
      <h1>{props.burgerDet.name}</h1>
      <br/>
      <select value={props.burgerDet.category} onChange={props.handleChange}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay

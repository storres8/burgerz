import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  // console.log(props.singleBurger)
  return (
    <div className="BurgerDisplay">
      <img src={props.singleBurger.imgURL}/>
      <br/>
      <h1>{props.singleBurger.name}</h1>
      <br/>
      <select onChange={(event) => props.handleCategory(event, props.singleBurger)} value={props.singleBurger.category}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay

import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={props.singleBurg.imgURL}/>
      <br/>
      <h1>{props.singleBurg.name}</h1>
      <br/>
      <select onChange={(event) => props.handleCat(event)} value={props.singleBurg.category}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay

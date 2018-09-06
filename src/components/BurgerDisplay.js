import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  // console.log(props.Burger)


  return (
    <div className="BurgerDisplay">
      <img src={props.Burger.imgURL}/>
      <br/>
      <h1>{props.Burger.name}</h1>
      <br/>
      <select value= {props.Burger.category} onChange={console.log}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay

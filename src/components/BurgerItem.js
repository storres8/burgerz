import React, { Component } from 'react';

const BurgerItem = (props) => {
  // console.log("helloooooo",props)
  return (
    <div>
      <div className="BurgerItem">
        {props.burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => props.renderBurger(props.burger)}>Show</button>
        <button onClick={() => props.deleteBurger(props.burger)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem

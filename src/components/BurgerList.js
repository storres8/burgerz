import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  // console.log(props)

  return (
    <div className="BurgerList">
      {
          props.burgerarray.map(burger =>{
          return <BurgerItem key= {burger.id} burger={burger} renderBurger={props.renderBurger} deleteBurger={props.deleteBurger} />
          })
        }

    </div>
  )
}

export default BurgerList

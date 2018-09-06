import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  return (
    <div className="BurgerList">
      {
        props.burgers.map(burger => {
          return <BurgerItem key={burger.id} burger={burger} showBurger={props.showBurger} handleDelete={props.handleDelete}/>
        })
      }
    </div>
  )
}


export default BurgerList

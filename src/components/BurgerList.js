import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  return (
    <div className="BurgerList">
      {  props.burgers.map(burger =>{
        return <BurgerItem  key={burger.id} burger={burger} singleBurger={props.singleBurger} handleDelete={props.handleDelete}/>
      }) }
    </div>
  )
}

export default BurgerList

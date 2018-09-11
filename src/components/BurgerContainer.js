import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  render(){
    // console.log(this.props)
    return (
      <div className="BurgerContainer">
        <BurgerFilter filterVar={this.props.filterVar}/>
        <BurgerList  burgers={this.props.burgers} singleBurger={this.props.singleBurger} handleDelete={this.props.handleDelete}/>
      </div>
    )
  }
}

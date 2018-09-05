import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filterTerm: 'All'
  }

  handleFilter = (event) => {
    console.log(event.target.value)
  }



  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilter={this.handleFilter}/>
        <BurgerList />
      </div>
    )
  }
}

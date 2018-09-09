import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  // state ={
  //   filtered: "All"
  // }
  //
  // handleFilter = (e) =>{
  //   this.setState({filtered: e.target.value})
  // }
  //
  // filterBurg = () => {
  //   if(this.state.filtered === "Bougie"){
  //     return this.props.burgerarray.filter(burger => {
  //       return burger.category === "Bougie"})
  //   } else if (this.state.filtered === "Relatable"){
  //     return this.props.burgerarray.filter(burger => {
  //       return burger.category === "Relatable"})
  //   } else{
  //     return this.props.burgerarray
  //   }
  // }


  render(){
    // console.log(this.props)

    // console.log(this.props)
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilter={this.props.handleFilter}/>
        <BurgerList burgerarray={this.props.burgerarray} renderBurger={this.props.renderBurger} deleteBurger={this.props.deleteBurger}/>
      </div>
    )
  }
}

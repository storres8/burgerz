import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filterTerm:"All"
  }

  handleFilter = (e) => {
    this.setState({
      filterTerm: e.target.value
    })
  }


filterList = () =>{
  if (this.state.filterTerm === "Bougie"){
    return this.props.burgers.filter(burger=>{
      return burger.category === "Bougie"
    })
  }else if(this.state.filterTerm === "Relatable"){
    return this.props.burgers.filter(burger=>{
      return burger.category === "Relatable"
    })
  }else{
    return this.props.burgers
  }
}




  render(){
    // console.log(this.props.handleDisplay);
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilter={this.handleFilter}/>
        <BurgerList burgers={this.filterList()} handleDisplay={this.props.handleDisplay} handleDelete={this.props.handleDelete}/>
      </div>
    )
  }
}

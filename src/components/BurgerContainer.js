import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filterTerm:"All"
  }

  getFilter= (e) =>{
    this.setState({filterTerm: e.target.value})
  }

  filterFunc = () => {
    if(this.state.filterTerm === "Relatable"){
      return this.props.burgers.filter(burger=>{
      return burger.category === "Relatable"
      })
    }else if(this.state.filterTerm === "Bougie"){
      return this.props.burgers.filter(burger=>{
      return burger.category === "Bougie"
    })
    }else{
      return this.props.burgers
  }
}

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter getFilter={this.getFilter}/>
        <BurgerList burgers={this.filterFunc()} showBurger={this.props.showBurger} handleDelete={this.props.handleDelete}/>
      </div>
    )
  }
}


// if(e.target.value === "Bougie"){
//   const b = this.state.burgers.filter(burger=>{burger.catergory === e.target.value})
//   return this.setState({burgers: b})
// }else if(e.target.value === "Relatable"){
//   const r = this.state.burgers.filter(burger=>{burger.catergory === e.target.value})
//   return this.setState({burgers: r})
// }else{
//   return this.state.burgers
// }
// }

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

state = {
  burgers: [],
  singleBurger: [],
  burgerId:1,
  filtered: "All"
}


componentDidMount(){
  fetch('http://localhost:3001/burgers')
  .then(resp => resp.json())
  .then(resp => this.setState({burgers: resp}))
}

renderBurger = (burger) => {
  this.setState({
    singleBurger: burger,
    burgerId: burger.id
  })
}

handleFilter = (e) =>{
  this.setState({filtered: e.target.value})
}

filterBurgers = () => {
  if (this.state.filtered === "Bougie") {
    return this.state.burgers.filter(burger => burger.category === "Bougie")
  } else if ( this.state.filtered === "Relatable"){
    return this.state.burgers.filter(burger => burger.category === "Relatable")
  }else{
    return this.state.burgers
  }
}

deleteBurger= (burg) => {
  const deleted = this.state.burgers.filter(burger => {
    return burger.id !== burg.id
  })
  this.setState({
    burgers: deleted
  })
}







  render() {
    console.log(this.state.filtered)
    return (
      <div id="App">
        <BurgerContainer burgerarray={this.filterBurgers()} renderBurger={this.renderBurger} handleFilter={this.handleFilter} deleteBurger={this.deleteBurger}/>
        <BurgerDisplay singleBurger={this.state.singleBurger} handleCategory={this.handleCategory}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state={
    burgers: [],
    singleBurger:1
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(resp => resp.json())
    .then(this.burgers)
  }

burgers = (burgerData) =>{
  this.setState({
    burgers: burgerData
  })
}

showBurger = (details) =>{
  this.setState({
    singleBurger:details.id
  })
}

getBurger = () =>{
  const burgers = this.state.burgers
  const index = this.state.singleBurger
  // console.log(burgers, index)

    const burg = burgers.find(burger =>{
      return burger.id === index
    })
  return burg
}


  handleDelete = (details) => {
  const newList = this.state.burgers.filter(burger =>{
    return burger.id !== details.id
  })
  return this.setState({burgers:newList})
  }


  render() {
    const burger = this.getBurger()
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} showBurger={this.showBurger} handleDelete={this.handleDelete}/>
        {burger ? <BurgerDisplay Burger={burger} /> : null }
      </div>
    );
  }
}

export default App;

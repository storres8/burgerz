import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state = {
    burgers:[],
    singleburger:[],
    burgFilter:""
  }

componentDidMount(){
  fetch('http://localhost:3001/burgers')
  .then(resp => resp.json())
  .then(resp => this.setState({burgers: resp}))
}

singleBurger = (burger) =>{
  this.setState({
    singleburger: burger
  })
}

filterVar = (e) =>{
this.setState({
  burgFilter: e.target.value.toString()
})
}

filterBurgers = () =>{
  if(this.state.burgFilter === "Relatable"){
    return this.state.burgers.filter(burger =>{
      return burger.category !== "Relatable"
    })
  } else if(this.state.burgFilter === "Bougie"){
    return this.state.burgers.filter(burger =>{
      return burger.category !== "Bougie"
    })
  }else{
    return this.state.burgers
  }
}


handleDelete = (burgz) =>{
   const newList = this.state.burgers.filter(burger=>{
    return burger.id !== burgz.id
  })
  this.setState({ burgers: newList})
}


handleCat = (e) =>{
  console.log(e.target.value)
  // get the state froms single burger and use
  // the e.target.value to chaange the current props of the single burger and then update those to the back end 
}

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.filterBurgers()} singleBurger={this.singleBurger} filterVar={this.filterVar} handleDelete={this.handleDelete}/>
        <BurgerDisplay singleBurg={this.state.singleburger} handleCat={this.handleCat}/>
      </div>
    );
  }
}

export default App;

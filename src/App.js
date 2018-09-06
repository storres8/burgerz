import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state ={
    burgersList:[],
    currentBurger:[]
  }

  componentDidMount(){
    fetch ('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) =>{
    this.setState({
      burgersList: resData,
    })
  }

  handleDisplay = (deets) =>{
    this.setState({
      currentBurger: deets,
    })

  }

  handleDelete = (single) =>{
    let filteredBurgers = this.state.burgersList.filter(burger => {
        return burger.id !== single.id})

    // console.log(filteredBurgers)
    return this.setState({
      burgersList: filteredBurgers,
    })
  }

  handleChange = (e) =>{
    let newList = this.state.burgersList.map(burger => {
      if(this.state.currentBurger.id === burger.id){
        return {...burger, category: e.target.value }
      } else{
        return burger
      }
    })

    const curBurg = {...this.state.currentBurger, category: e.target.value}

    this.setState({
      burgersList: newList,
      currentBurger: curBurg
    }, this.patching)
  }

  patching = () => {
    fetch(`http://localhost:3001/burgers/${this.state.currentBurger.id}`,{
      method: 'PATCH', // or 'PUT'
      body: JSON.stringify(this.state.currentBurger), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(console.log)

  }

  render() {
    // console.log("curBUg", this.state.currentBurger);
    // console.log("burger LIst", this.state.burgersList);
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgersList} handleDisplay= {this.handleDisplay} handleDelete={this.handleDelete}/>
        <BurgerDisplay burgerDet={this.state.currentBurger} handleChange={this.handleChange} />
      </div>
    );
  }
}



export default App;

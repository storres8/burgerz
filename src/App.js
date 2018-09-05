import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state ={
    burgersList:[]
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



  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgersList}/>
        <BurgerDisplay />
      </div>
    );
  }
}



export default App;

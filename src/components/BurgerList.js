import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = ({burgers, handleDisplay, handleDelete}) => {
  // console.log("helloooo",burgers);

  return (
    <div className="BurgerList">
      {
        burgers.map(burger =>{
          return <BurgerItem key={burger.id} burger={burger} handleDisplay={handleDisplay} handleDelete={handleDelete} />
        })
      }
    </div>
  )
}



// class BurgerList extends Component {
//
//   b = () => {
//     return this.props.burgers.map(burger =>{
//      return < BurgerItem burgers={burger} />
//     })
//   }
//
//
//   render() {
//     return (
//       <div className="BurgerList">
//         {this.b()}
//       </div>
//     )
//   }
// }



export default BurgerList;

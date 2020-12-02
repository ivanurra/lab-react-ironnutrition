import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';


class App extends React.Component {

  state = {
    allFoods: foods,
  };

  render(){
    return (
      <div className="App">
          {this.state.allFoods.map((food) => {
      return (
        <Foodbox image={food.image} name={food.name} calories={food.calories} quantity={food.quantity}></Foodbox>
      )
    })}
      </div>
    )
  }
}

export default App

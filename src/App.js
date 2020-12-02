import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox';
import Search from './components/Search';

class App extends React.Component {

  state = {
		food: [ ...foods ],
		searchedWord: '',
    temporalNewFood: { name: '', calories: '', image: '', quantity: 0 },
    temporalNewFoodToday: { name: ''},
    todayFood: [],
		showForm: false
	}

  changeSearchedWord = (_value) => {
    this.setState({searchedWord: _value})
  }

  checkForIncludedFood = () => {
    const filteredFoods = this.state.food.filter((food) => {
      return food.name.toLowerCase().includes(this.state.searchedWord.toLowerCase())
    })
    return filteredFoods
  }

  renderFood = () => {
		const finalArrayOfFoods = this.checkForIncludedFood();
		return finalArrayOfFoods.map((food, index) => {
			return <FoodBox 
              key={index} 
              name={food.name} 
              calories={food.calories} 
              image={food.image} 
            />
		});
  };
  
  renderFoodToday = () => {
		return this.state.todayFood.map((food, index) => {
			return 
		});
	};

  submitForm = (event) => {
		event.preventDefault();
		const copyOfFoods = [ ...this.state.food ];
		copyOfFoods.unshift(this.state.temporalNewFood);

    this.setState({ food: copyOfFoods,  showForm: false});
	}

  renderForm = () => {
		return (
			<form onSubmit={this.submitForm}>
				<label htmlFor="name">Name: </label>
				<input class="input"
					type="text"
					name="name"
					onChange={(event) =>
						this.setState({ temporalNewFood: { ...this.state.temporalNewFood, name: event.target.value } })}
				/>

				<label htmlFor="calories">Calories: </label>
				<input class="input"
					type="text"
					name="calories"
					onChange={(event) =>
						this.setState({
							temporalNewFood: { ...this.state.temporalNewFood, calories: event.target.value }
						})}
				/>

				<label htmlFor="image">Image: </label>
				<input class="input"
					type="text"
					name="image"
					onChange={(event) =>
						this.setState({
							temporalNewFood: { ...this.state.temporalNewFood, image: event.target.value }
						})}
				/>

				<button class="button is-info" type="submit">Create</button>
			</form>
		);
	};

	render() {
		return (
			<div className="App">
        <h1 class="title">NUTRITION BOARD</h1>
				<button class="button is-info" onClick={() => this.setState({showForm: true})}>Add new food</button>

				{this.state.showForm && this.renderForm()}

				<Search changeSearchedWord={this.changeSearchedWord} />
				{this.renderFood()}
			</div>
		);
	}
}

export default App;


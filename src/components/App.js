import React, { Component } from 'react';
import Filter from './Filter';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render(){
    return (
      <FruitBasket fruit={this.state.fruit}
                  filters={this.state.filters}
                  currentFilter={this.state.currentFilter} 
                  updateFilterCallback={this.updateFilterCallback}
                  />
    )

  }
}
export default App;

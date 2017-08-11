import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ updateFilterCallback, currentFilter, fruit, filters }) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} />
      <FilteredFruitList
        filter={currentFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  updateFilterCallback: () => {},
  currentFilter: null,
  fruit: [],
  filters: []
}

export default FruitBasket;

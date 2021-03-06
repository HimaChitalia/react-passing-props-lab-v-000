import React from 'react';

const FilteredFruitList = ({ filter, fruit }) => {

  const list = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
}

export default FilteredFruitList;

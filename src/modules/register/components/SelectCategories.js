import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    children: [
      {
        id: 11,
        name: 'Child 1 of Category 1',
      },
      {
        id: 12,
        name: 'Child 2 of Category 1',
      },
    ],
  },
  {
    id: 2,
    name: 'Category 2',
    children: [
      {
        id: 21,
        name: 'Child 1 of Category 2',
      },
      {
        id: 22,
        name: 'Child 2 of Category 2',
      },
    ],
  },
];

const Category = ({ category, selectedCategories, setSelectedCategories }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxChange = event => {
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, category.id]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== category.id));
    }
  };

  const isCategorySelected = selectedCategories.includes(category.id);

  return (
    <div>
      <h2>
        {category.name}{' '}
        <button onClick={toggleExpanded}>{expanded ? '-' : '+'}</button>
        <input type="checkbox" checked={isCategorySelected} onChange={handleCheckboxChange} />
      </h2>
      {expanded && category.children && (
        <ul>
          {category.children.map(child => (
            <li key={child.id}>
              {child.name}{' '}
              <input type="checkbox" checked={isCategorySelected} onChange={handleCheckboxChange} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SelectCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div>
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      ))}
    </div>
  );
};

export default SelectCategories;

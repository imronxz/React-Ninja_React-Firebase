import { useState } from 'react';

const filterList = [
  'Semua',
  'Project_Saya',
  'development',
  'design',
  'marketing',
  'sales',
];

export default function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState('Semua');

  const handleClick = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Sort By:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}

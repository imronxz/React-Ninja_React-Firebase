import { useState } from 'react';
import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';

// Styles
import './Dashboard.css';
import ProjectFilter from './ProjectFilter';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');
  const [currentFilter, setCurrentFilter] = useState('Semua');

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div>
      <h2 className="page-title">Project List 🐱‍🏍</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

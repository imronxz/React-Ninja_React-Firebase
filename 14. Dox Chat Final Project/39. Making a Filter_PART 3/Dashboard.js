import { useState } from 'react';
import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';

// Styles
import './Dashboard.css';
import ProjectFilter from './ProjectFilter';

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('projects');
  const [currentFilter, setCurrentFilter] = useState('Semua');

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  /**  TODO filter by category
   *  @filterProjects = jika documents ada, maka filter projects, else null
   *  @filterProjects = documents.filter(document => switch(currentFilter))
   *  @'Semua' = semua projects
   *  @'Project_Saya' = projects milik user,
   *
   *
   */
  const filterProjects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case 'Semua':
            return true;
          case 'Project Saya':
            let myProject = false;
            document.createdBy.id === user.uid
              ? (myProject = true)
              : (myProject = false);
            return myProject;
          case 'Kolaborasi':
            let myCollabs = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                myCollabs = true;
              }
            });
            return myCollabs;
          case 'Development':
          case 'Design':
          case 'Marketing':
          case 'Sales':
            // console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Project List 🐱‍🏍</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {filterProjects && <ProjectList projects={filterProjects} />}
    </div>
  );
}

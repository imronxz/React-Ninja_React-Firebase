import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';

// Styles
import './Dashboard.css';
import ProjectFilter from './ProjectFilter';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');

  return (
    <div>
      <h2 className="page-title">Project List 🐱‍🏍</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

// useParams from react-router-dom@5.3.0
import { useParams } from 'react-router-dom';

// costume hooks
import { useDocument } from '../../hooks/useDocument';

// Styles
import './Project.css';
import ProjectSummary from './ProjectSummary';

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
    </div>
  );
}

// Link react-router-dom@5.3.0
import { Link } from 'react-router-dom';

// avatar components
import Avatar from './Avatar';

// Styles
import './ProjectList.css';

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>Tidak ada project yang ditemukan</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h3>{project.name}</h3>
          <p>
            Dibuat Pada Tanggal: {project.date.toDate().toLocaleDateString('ID-ID')}
          </p>
          <div className="assigned-to">
            <p>Collabs 🌃:</p>
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
          <div className="author">
            <h6>
              Creator Project: {project.createdBy.displayName}
              <Avatar src={project.createdBy.photoURL} />
            </h6>
          </div>
        </Link>
      ))}
    </div>
  );
}

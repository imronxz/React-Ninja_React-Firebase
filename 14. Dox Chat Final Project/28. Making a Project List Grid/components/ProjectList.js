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
        <Link to={`/project/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Dibuat Pada Tanggal: {project.date.toDate().toLocaleDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

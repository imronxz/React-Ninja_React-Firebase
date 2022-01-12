import Avatar from '../../components/Avatar';
import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

// TODO: received props from Project.js
export default function ProjectSummary({ project }) {
  const history = useHistory();
  const { deleteDocument } = useFirestore('projects');
  const { user } = useAuthContext();

  const handleClick = (e) => {
    deleteDocument(project.id);
    // redirect home
    history.push('/');
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="date">
          Dibuat pada Tanggal: {project.date.toDate().toLocaleDateString('ID-ID')}
        </p>
        <p className="details">{project.details}</p>
        <h4>User Colaborations 🐱‍👤</h4>
        {/** @assignedUsersList: User Colaborations
         *   @Avatar: Avatar Component, src of user.photoURL
         *   @displayName: user.displayName
         */}
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
              {/* <p>{user.displayName} </p> */}
            </div>
          ))}
        </div>
      </div>
      <br />
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Project Selesai 💯
        </button>
      )}
    </div>
  );
}

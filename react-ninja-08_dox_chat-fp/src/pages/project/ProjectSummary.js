import Avatar from '../../components/Avatar';

// TODO: received props from Project.js
export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="date">
          Dibuat pada Tanggal: {project.date.toDate().toLocaleDateString('ID-ID')}
        </p>
        <p className="details">{project.details}</p>
        <h4>User Colaborations 🐱‍👤</h4>
        {/** @assignedUsersList: User Colaborations
         *   @Avatar: Avatar Component, src of user.photoURL
         *   @displayName: user.displayName
         */}
        {project.assignedUsersList.map((user) => (
          <div key={user.id} className="assigned-users">
            <Avatar src={user.photoURL} />
            <p>{user.displayName} ♾</p>
          </div>
        ))}
      </div>
    </div>
  );
}

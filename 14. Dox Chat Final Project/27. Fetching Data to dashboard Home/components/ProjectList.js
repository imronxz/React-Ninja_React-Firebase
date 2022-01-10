// Styles
import './ProjectList.css';

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>Tidak ada project yang ditemukan</p>}
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}

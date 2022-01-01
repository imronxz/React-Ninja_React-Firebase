import './Title.css';

// TODO: Title({a, b}) destructuring from the object
export default function Title({ title, subtitle }) {
  return (
    <div className="title-block">
      <h1 className="title">{title}</h1>
      <br />
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  );
}

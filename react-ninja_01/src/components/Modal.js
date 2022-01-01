import ReactDOM from 'react-dom'; //Portal
import './Modal.css';

/*TODO:  Children Props from jsx App.js*/
export default function Modal({ children, handleClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br />
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body,
  );
}

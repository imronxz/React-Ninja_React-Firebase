import ReactDOM from 'react-dom'; //Portal
import './Modal.css';

/*TODO:  Children Props from jsx App.js*/
export default function Modal({ children, handleClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: '4px solid ',
          borderColor: '#ff4500',
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#fff8dc',
        }}
      >
        {children}
        <br />
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body,
  );
}

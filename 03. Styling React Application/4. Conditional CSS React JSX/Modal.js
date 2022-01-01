import ReactDOM from 'react-dom'; //Portal
import './Modal.css';

/*TODO:  Children Props from jsx App.js*/
export default function Modal({ children, handleClose, dinamicInlStyles }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: '2px solid ',
          borderColor: dinamicInlStyles ? '#555' : '#ff4500',
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#fff8dc',
        }}
      >
        {children}
        <br />
        <button onClick={handleClose} className={dinamicInlStyles ? 'sales-btn' : ''}>
          close
        </button>
      </div>
    </div>,
    document.body,
  );
}

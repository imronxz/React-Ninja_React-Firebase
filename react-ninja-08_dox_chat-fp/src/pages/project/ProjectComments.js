import { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';

import './Project.css';

export default function ProjectComments() {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Date.now().toString().slice(5),
    };
    console.log(commentToAdd);
  };

  return (
    <div className="project-comments">
      <h4>Project Blame</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Masukkan Komentar: </span>
          <textarea
            // cols="25"
            rows="7"
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            placeholder="Review Project"
          ></textarea>
        </label>
        <button className="btn">Tambah Komentar</button>
      </form>
    </div>
  );
}

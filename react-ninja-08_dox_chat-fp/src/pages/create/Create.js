// React Hooks
import { useEffect, useState } from 'react';

// firebase/timestamp
import { timestamp } from '../../firebase/config';

//TODO: Costume hooks
// collection Hooks
import { useCollection } from '../../hooks/useCollection';
// context Hooks
import { useAuthContext } from '../../hooks/useAuthContext';
// firestore Hooks
import { useFirestore } from '../../hooks/useFirestore';

// useHistory react-router-dom
import { useHistory } from 'react-router-dom';

// react-select
import Select from 'react-select';

// Styles
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

export default function Create() {
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  // useAuthContext : user -> createdAt
  const { user } = useAuthContext();

  // useFirestore : collection
  const { addDocument, response } = useFirestore('projects');

  // useHistory react-router-dom
  const history = useHistory();

  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    // * check if category fields are filled
    if (!category) {
      setFormError('Pilih salah satu kategori project');
      return;
    }
    // * check if assignedUsers fields are filled
    if (assignedUsers.length < 1) {
      setFormError('Pilih user yang akan bertugas');
    }
    /** @user context -> useAuthContext
     *  displayName, photoURL, id
     */
    //HACK: using Costume Hooks: user -> displayName, photoURL, id
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    /** @TODO: assign project to users
     *  @assignedUsersList: assignedUsers.map((user) => {object})
     *  @assignedUsersList: [{displayName, photoURL, id}]
     */
    //HACK: mapping assignedUsers to new array of objects, only takes the value displayName, photoURL, id
    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    /** @Project: {name, details, date, category, comments, createdBy, assignedUsers}
     *  @name: name,
     *  @details: details,
     *  @date: timestamp.fromDate(new Date(date)), -> firebase/timestamp
     *  @category: category.value, -> value, label
     *  @comments: [],
     *  @createdBy: createdBy, -> costum hooks user(displayName, photoURL, id)
     *  @assignedUsersList: assignedUsersList, -> assignedUsers.map[{displayName, photoURL, id}]
     */
    // TODO: create a new project object
    const project = {
      name,
      details,
      date: timestamp.fromDate(new Date(date)),
      category: category.value,
      comments: [],
      createdBy,
      assignedUsersList,
    };
    // TODO: add project to firestore
    await addDocument(project);

    // Jika berhasil, redirect ke halaman projects
    if (!response.error) {
      history.push('/');
    }
  };

  /** @documents is an array of objects
   *  @documents.map(user) is an array of objects
   *  @documents.map(user).map(user.displayName).map(user) is an array of objects
   *  setUsers(documents.map(user).map(user.displayName))
   *  dependencies: documents
   */
  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  return (
    <div className="create-form">
      <h2 className="page-title">Buat Project Baru 🐱‍🏍</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title Project 💬</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Judul Project"
          />
        </label>
        <label>
          <span>Details Project 📃</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            placeholder="Detail Project.."
          ></textarea>
        </label>
        <label>
          <span>Date Created 📅</span>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Project Categories 🥇</span>

          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
            placeholder="Kategori - Pilih salah satu"
          />
        </label>
        <label>
          <span>Users Colaborations 👯‍♂️</span>
          {/** @users is an array of objects
           *   @onChange={(option) => setAssignedUsers(option)}
           *   @options={users}
           *   isMulti={true} -> Multi Select
           *   @placeholder="User Related Project"
           *   dependencies: users
           */}
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
            placeholder="Pilih User yang akan ditugaskan"
          />
        </label>
        <button className="btn">Tambah Project</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

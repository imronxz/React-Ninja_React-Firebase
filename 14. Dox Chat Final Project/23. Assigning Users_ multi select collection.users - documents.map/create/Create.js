// React Hooks
import { useEffect, useState } from 'react';

// Costume hooks Firestore.collection.users -> documents
import { useCollection } from '../../hooks/useCollection';

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

  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, date, category.value, assignedUsers);
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
          <span>Title :</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nama Project"
          />
        </label>
        <label>
          <span>Detail Project :</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            placeholder="Detail Project.."
          ></textarea>
        </label>
        <label>
          <span>Tanggal Project :</span>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Kategori Project:</span>

          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
            placeholder="Kategori"
          />
        </label>
        <label>
          <span>User Related Project :</span>
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
            placeholder="Pilih User yang akan bekerja"
          />
        </label>

        <button className="btn">Tambah Project</button>
      </form>
    </div>
  );
}

import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

// Styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const history = useHistory();

  const { mode } = useTheme();

  const { postData, data } = useFetch('http://localhost:3001/recipes', 'POST');
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: pass data to useFetch.js function postData=(postData)
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' menit',
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // TODO: validate

    const ing = newIngredient.trim(); //FIXME: trim hapus spasi/teks kosong

    // TODO check if ingredients input is empty and not duplicate, then
    if (ing && !ingredients.includes(ing)) {
      // FIXME:  return setIngredients to prevIngredients/ingredients array and newIngredient string
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    // TODO: clear input field to empty
    setNewIngredient('');
    // TODO: fokus mode pada inputan
    ingredientInput.current.focus();
  };

  // TODO: redirect the user when the data is successfully posted
  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data, history]);

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Tambah Resep Baru</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Judul Resep"
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
              placeholder="Masukkan bahan"
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>

        <p>
          Resep & Bahan:{' '}
          {ingredients.map((ing) => (
            <em key={ing}>{ing},</em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <input
            // {style="width:35%; height:100px"}
            // style
            style={{
              width: '100%',
              height: '70px',
              position: 'relative',
            }}
            type="text"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            placeholder="Cara Memasak"
            required
          />
        </label>

        <label>
          <span>Cooking Time (menit):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            placeholder="Waktu Memasak"
            required
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}

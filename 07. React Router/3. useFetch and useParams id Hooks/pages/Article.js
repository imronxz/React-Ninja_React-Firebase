import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// Styles
import './Article.css';
export default function Article() {
  // const paramsArticleId = useParams().id;
  const { id } = useParams();
  const url = 'http://localhost:3001/articles/' + id;
  const { data: article, isPending, error } = useFetch(url);

  return (
    <div className="article">
      {/* <p>Articles pages { paramsArticleId}</p> */}
      {/* <p>Articles pages - {id}</p> */}

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div className="article-content">
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}

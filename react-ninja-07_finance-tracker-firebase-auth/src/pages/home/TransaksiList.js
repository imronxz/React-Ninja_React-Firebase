import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';

import deleteIcon from '../../assets/delete-icon.svg';

//Styles
import styles from './Home.module.css';

export default function TransaksiList({ transaksi }) {
  const { deleteDocument } = useFirestore('transaksi');
  const { mode } = useAuthContext();

  return (
    <ul className={`${styles.transactions} ${mode}`}>
      {transaksi.map((transaksi) => (
        <li key={transaksi.id}>
          <p className={styles.name}>{transaksi.name}</p>
          <p className={styles.amount}>Rp. {transaksi.amount}</p>
          <img
            src={deleteIcon}
            alt="delete-icon"
            onClick={() => deleteDocument(transaksi.id)}
            className={styles.delete}
          />
        </li>
      ))}
    </ul>
  );
}

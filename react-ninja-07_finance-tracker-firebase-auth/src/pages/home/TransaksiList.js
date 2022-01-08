import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';

import deleteIcon from '../../assets/delete-icon.svg';

//Styles
import styles from './Home.module.css';

export default function TransaksiList({ transaksi }) {
  const { deleteDocument } = useFirestore('transaksi');
  const { color } = useAuthContext();

  return (
    <ul className={styles.transactions}>
      {transaksi.map((transaksi) => (
        <li
          key={transaksi.id}
          style={{
            borderLeftColor: color,
            borderTopColor: color,
            borderBottomColor: color,
            borderRightColor: color,
          }}
        >
          <p className={styles.name} style={{ color: color }}>
            {transaksi.name}
          </p>

          <p className={styles.amount} style={{ color: color }}>
            Rp. {transaksi.amount}
          </p>
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

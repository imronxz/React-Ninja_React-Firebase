//Styles
import styles from './Home.module.css';

export default function TransaksiList({ transaksi }) {
  return (
    <ul className={styles.transactions}>
      {transaksi.map((transaksi) => (
        <li key={transaksi.id}>
          <p className={styles.name}>{transaksi.name}</p>
          <p className={styles.amount}>Rp. {transaksi.amount}</p>
        </li>
      ))}
    </ul>
  );
}

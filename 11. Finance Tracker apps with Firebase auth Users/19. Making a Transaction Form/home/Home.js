import styles from './Home.module.css';

// Komponen
import TransaksiForm from './TransaksiForm';

export default function home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransaksiForm />
      </div>
    </div>
  );
}

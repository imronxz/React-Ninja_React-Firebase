// Context useAuthContext
import { useAuthContext } from '../../hooks/useAuthContext';

// styles module
import styles from './Home.module.css';

// Komponen
import TransaksiForm from './TransaksiForm';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        {/* FIXME: uid props harus dari user yang login*/}
        <TransaksiForm uid={user.uid} />
      </div>
    </div>
  );
}

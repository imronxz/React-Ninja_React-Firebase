// Context useAuthContext
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// styles module
import styles from './Home.module.css';

// Komponen
import TransaksiForm from './TransaksiForm';
import TransaksiList from './TransaksiList';

export default function Home() {
  const { user, mode } = useAuthContext();
  const { documents, error } = useCollection(
    'transaksi',
    ['uid', '==', user.uid],
    ['createdAt', 'desc'],
  );

  return (
    <div className={`${styles.container} ${mode}`}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransaksiList transaksi={documents} />}
      </div>
      <div className={styles.sidebar}>
        {/* FIXME: uid props harus dari user yang login*/}
        <TransaksiForm uid={user.uid} />
      </div>
    </div>
  );
}

import styles from './EventList.module.css'; //import styles module

export default function EventList({ handleClick, events }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>User: {event.title}</h2>
          <h3>Tggl : {event.date}</h3>
          <h3>IdUsr: {event.id} </h3>
          <button
            onClick={() => {
              handleClick(event.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

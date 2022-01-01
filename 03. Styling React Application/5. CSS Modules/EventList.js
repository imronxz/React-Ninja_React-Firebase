import styles from './EventList.module.css'; //import styles module

export default function EventList({ handleClick, events }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h1>
            {index} - {event.title}
          </h1>
          <button
            onClick={() => {
              handleClick(event.id);
            }}
          >
            delete event
          </button>
        </div>
      ))}
    </div>
  );
}

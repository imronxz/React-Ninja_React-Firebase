import { Fragment } from 'react';

export default function EventList({ handleClick, events }) {
  return (
    <div>
      {events.map((event, index) => (
        <Fragment key={event.id}>
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
        </Fragment>
      ))}
    </div>
  );
}

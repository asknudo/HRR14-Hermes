import React from 'react';
import EventScheduleEntryView from './event_schedule_entryview';

const EventSchedule = (props) => {
  let items = props.events.map((event) => {
    return <EventScheduleEntryView key={event.id} event={event} onEventDelete = { props.onEventDelete } />;
  });
  return (
    <ul>
      {items}
    </ul>
  );
};

export default EventSchedule;

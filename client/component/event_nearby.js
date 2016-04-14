import React from 'react';
import EventNearbyEntryView from './event_nearby_entryview';

const EventNearby = (props) => {
  let items = props.events.map((event) => {
    return (
      <EventNearbyEntryView key={event.id} event={event} id={event.id} onEventSelect = { props.onEventSelect } />
      );
  });
  return (
    <ul style={{ listStyleType: 'none' }} className="col-sm-2 list-inline">
      {items}
    </ul>
  );
};

export default EventNearby;

import React from 'react';

const EventNearbyEntryView = (props) => {
  return (
    <li>
      {props.event.event}
      <button onClick = {() => {
        props.onEventSelect(props.event);
      }
      }>Join</button>
    </li>
  );
};
export default EventNearbyEntryView;

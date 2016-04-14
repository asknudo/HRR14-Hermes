import React from 'react';
import Button from 'react-bootstrap/lib/Button';



const EventNearbyEntryView = (props) => {
  return (
    <li>
      {props.event.event}
      <Button bsSize="small" onClick = {() => {
        props.onEventSelect(props.event);
        }
      }>Join</Button>
    </li>
  );
};
export default EventNearbyEntryView;


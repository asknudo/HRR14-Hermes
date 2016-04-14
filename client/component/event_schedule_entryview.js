import React from 'react';
import Button from 'react-bootstrap/lib/Button';


const EventScheduledEntryView = (props) => {
  return (
    <li>
      {props.event.event}
      <Button bsSize="small" onClick = { () => {
        props.onEventDelete(props.event);
      }}
      >Delete</Button>
    </li>
  );
};

export default EventScheduledEntryView;

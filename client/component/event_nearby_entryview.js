import React from 'react';
import { Button } from 'react-bootstrap';

const EventNearbyEntryView = (props) => {
  return (
    <li className="eventHeading">
      {props.event.event}
      <Button className="button" bsStyle="primary" block bsSize="small" onClick = {() => {
        props.onEventSelect(props.event);
      }}
      >Join</Button>
    </li>
  );
};
export default EventNearbyEntryView;

import React from 'react';
import ReactDOM from 'react-dom';
import EventNearby from './component/event_nearby';
import EventSchedule from './component/event_schedule';
import MapView from './component/mapview';
import SearchBar from './component/search_bar'
import toastr from 'toastr';
import ReactBootstrap from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_nearby: [
        { id: 121, event: 'Football' },
        { id: 124, event: 'Basketball' },
        { id: 122, event: 'Baseball' },
        { id: 120, event: 'Golf' },
        { id: 1221, event: 'Football' },
        { id: 1243, event: 'Basketball' },
        { id: 1224, event: 'Baseball' },
        { id: 1205, event: 'Golf' },
        { id: 1216, event: 'Football' },
        { id: 1247, event: 'Basketball' },
        { id: 1228, event: 'Baseball' },
        { id: 1209, event: 'Golf' },
        { id: 1210, event: 'Football' },
        { id: 12433, event: 'Basketball' },
        { id: 12244, event: 'Baseball' },
        { id: 12055, event: 'Golf' },
        { id: 12166, event: 'Football' },
        { id: 12477, event: 'Basketball' },
        { id: 12288, event: 'Baseball' },
        { id: 12099, event: 'Golf' },
        { id: 122221, event: 'Football' },
        { id: 122234, event: 'Basketball' },
        { id: 1244442, event: 'Baseball' },
        { id: 12555550, event: 'Golf' },
        { id: 12766661, event: 'Football' },
        { id: 12434345, event: 'Basketball' },
      ],
      event_scheduled: [],
    };

    // API Calls to database HERE
  }
  // helperEventSelect(event) {
  //   console.log(this);
  //   const temp = this.state.event_scheduled;
  //   temp.push(event);
  //   this.setState({ event_scheduled: temp });
  // }
  render() {
    return (
      <div>
        <h1 className="header">League and Rekt</h1>
        <SearchBar />
        <EventNearby
          onEventSelect = { (event) => {
            if (this.state.event_scheduled.indexOf(event) > -1) {
              toastr.info('You have already signed up for this event!', 'Hey there!', { positionClass: 'toast-top-center', closeButton: true });
              // return;
            } else {
              const temp = this.state.event_scheduled;
              temp.push(event);
              this.setState({ event_scheduled: temp });
            }
          }}
          events = {this.state.event_nearby}
        />
        <MapView />
        <EventSchedule
          onEventDelete = { (event) => {
            const temp = this.state.event_scheduled;
            for (let i = 0; i < temp.length; i++) {
              if (temp[i].id === event.id) {
                temp.splice(i, 1);
                this.setState({ event_scheduled: temp });
                return;
              }
            }
          }}
          events = {this.state.event_scheduled}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

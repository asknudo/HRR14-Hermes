import React from 'react';
import ReactDOM from 'react-dom';
import EventNearby from './component/event_nearby';
import EventSchedule from './component/event_schedule';
import MapView from './component/mapview';
import SearchBar from './component/search_bar';
import toastr from 'toastr';
import ReactBootstrap from 'react-bootstrap';
import FormView from './component/formview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_nearby: [
        { id: 121, event: 'Football', lat: 37.59, lng: -122.44 },
        { id: 124, event: 'Basketball', lat: 37.55, lng: -122.43 },
        { id: 122, event: 'Baseball', lat: 37.56, lng: -122.42 },
      ],
      event_scheduled: [],
      form_visibility: 'hide',

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
        <MapView events = {this.state.event_nearby} onMapClick = { (coor) => {
          const self = this;
          if (this.state.form_visibility === 'hide') {
            self.setState({ form_visibility: 'show' });
          } else {
            self.setState({ form_visibility: 'hide' });            
          }
        }}
        />
        <FormView visibility = {this.state.form_visibility} />
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

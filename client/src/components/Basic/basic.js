import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from "moment";
import './basic.css';
import axios from "axios";
//import events from '../../../routes/events';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Basic extends React.Component {

  state = {
    events: []
  };

  componentDidMount() {
    axios.get("/events/")
      .then(res => this.setState({events: res}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <BigCalendar
        events={this.state.events}
        popup events={this.state.events}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(new Date().setHours(new Date().getHours() - 3))}
        onSelectEvent={event => alert(`${event.title}:
        ${event.desc}`)}
            onSelectSlot={slotInfo =>
            alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
            }
      />
    )
  }
};

export default Basic
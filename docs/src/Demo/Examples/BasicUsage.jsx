import React, { Fragment, Component } from 'react';
import { Typography } from 'material-ui';
import { TimePicker, DatePicker } from 'material-ui-pickers';

export default class BasicUsage extends Component {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <Typography variant="headline" align="center" gutterBottom>
            Date picker
          </Typography>

          <DatePicker
            keyboard
            clearable
            label="Choose a date"
            helperText="Possible manual entry via keyboard"
            maxDateMessage="Date must be less than today"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>

        <div className="picker">
          <Typography variant="headline" align="center" gutterBottom>
            Time picker
          </Typography>

          <TimePicker
            keyboard
            mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            placeholder="08:00 AM"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>
      </Fragment>
    );
  }
}

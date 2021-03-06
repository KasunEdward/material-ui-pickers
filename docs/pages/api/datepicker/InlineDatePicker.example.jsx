import { DatePicker, KeyboardDatePicker } from 'material-ui-pickers';
import React, { Fragment, useState } from 'react';

function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DatePicker
        onlyCalendar
        variant="inline"
        label="Only calendar"
        helperText="No year selection"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"
        value={selectedDate}
        onChange={handleDateChange}
        InputAdornmentProps={{ position: 'start' }}
        format={props.getFormatString({
          moment: 'MM/DD/YYYY',
          dateFns: 'MM/dd/yyyy',
        })}
      />
    </Fragment>
  );
}

export default InlineDatePickerDemo;

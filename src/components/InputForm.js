import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class InputForm extends React.Component{
  render(){
    return(
      <form noValidate autoComplete="off">
        <div className="mb-2 mt-2 w-40">
          <TextField id="filled-basic" label="Name" variant="filled" fullWidth multiline/>
        </div>
        <div className="mb-2 w-40">
          <TextField id="filled-basic" label="Email" variant="filled" fullWidth multiline/>
        </div>
        <div className="mb-2">
        <TextField id="filled-basic" label="Message" variant="filled" fullWidth multiline
          rows="8" />
        </div>
        <Button variant="contained" color="primary">SEND</Button>
      </form>
    );
  }

}

export default InputForm;

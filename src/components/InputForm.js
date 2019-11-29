import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class InputForm extends React.Component{
  render(){
    return(
      <form noValidate autoComplete="off">
        <div>
          <TextField id="filled-basic" label="Name" variant="filled" />
        </div>
        <div>
          <TextField id="filled-basic" label="Email" variant="filled" />
        </div>
        <div>
        <TextField id="filled-basic" label="Message" variant="filled" />
        </div>
        <Button variant="contained" color="primary">SEND</Button>
      </form>
    );
  }

}

export default InputForm;

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class InputForm extends React.Component{
  render(){
    return(
      <div>
      <form noValidate autoComplete="off">
        <TextField id="filled-basic" label="Name" variant="filled" />
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="filled-basic" label="Message" variant="filled" />
      </form>
      <Button variant="contained" color="primary">SEND</Button>
      </div>);
  }

}

export default InputForm;

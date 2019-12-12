import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com'

class InputForm extends React.Component{
  state = {
      name: "",
      email: "",
      emailHelperText: "Required",
      emailError: false,
      message: "",
  };

  validate = () => {
    let isError = false;
    const errors = {};

    // Check if the email is in the right form.
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = regexp.test(this.state.email);

    if(!validEmail){
      isError = true;
      errors.emailHelperText = "This is not a valid email.";
      this.state.emailError = true;
    }

    // Check if an email is provided.
    if(this.state.email.length < 1) {
      isError = true;
      errors.emailHelperText = "An email is required.";
      this.state.emailError = true;
    }

    if(isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  };

  handleSubmit(e) {
      e.preventDefault()
      const { name, email, message } = this.state;
      let templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'danielafrolich@gmail.com',
        message_html: message,
       }

       // Check errors
       const err = this.validate();

       // Template found in email.js.com
       if(!err){
         emailjs.send(
          'gmail',
          'template_MGtZMiAa',
           templateParams,
          'user_khpTpxaiOdTzU6FliHwo2'
         )

         //Clear form
         this.resetForm()
       }
   }

   resetForm() {
    this.setState({
      name: '',
      email: '',
      emailHelperText: 'Required',
      emailError: false,
      message: '',
    })
  }

  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
  }

  render(){
    return(
      <form role="form" noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
        <div className="mb-2 mt-2 w-40">
          <TextField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this, 'name')}
            id="name"
            label="Name"
            variant="filled"
            fullWidth/>
        </div>
        <div className="mb-2 w-40">
          <TextField
            required
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')}
            label="Email"
            variant="filled"
            helperText={this.state.emailHelperText}
            error={this.state.emailError}
            fullWidth
          />
        </div>
        <div className="mb-2">
        <TextField
            type="textarea"
            name="message"
            value={this.state.message}
            onChange={this.handleChange.bind(this, 'message')}
            id="message"
            label="Message"
            variant="filled"
            fullWidth
            multiline
          rows="8" />
        </div>
        <Button
          name="SEND"
          className="button"
          variant="contained"
          color="primary"
          type="submit"
        >SEND
        </Button>
      </form>
    );
  }

}

export default InputForm;

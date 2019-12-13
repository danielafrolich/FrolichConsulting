import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com'
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorIcon from '@material-ui/icons/Error';
import checked_green from "../images/checked_green.svg";
import checked from "../images/checked.svg";
import error from "../images/error.svg";

class InputForm extends React.Component{
  state = {
      name: "",
      email: "",
      emailHelperText: "Required",
      emailError: false,
      message: "",
      trailIcon: checked,
      trailAlt: "Required",
      introMessage: "Do you have a project where you need an experienced backend developer? Send me a line! All required fields are marked with an asterisk.",
      buttonClass: "display-none",
      formClass: ""
  };

  validate = () => {
    let isError = false;
    const errors = {};

    // Check if the email is in the right form.
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = regexp.test(this.state.email);

    if(!validEmail){
      isError = true;
      errors.emailHelperText = "Please provide a valid email.";
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
        ...errors,
        trailIcon: error,
        trailAlt: "Error"
      });

    }else{
      this.setState({
        emailHelperText: "",
        emailError: false,
        trailIcon: checked_green,
        trailAlt: "Correct input"
      })
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

        this.setState({
          introMessage: "Message received. Thanks! I'll be in touch with you shortly.",
          formClass: "display-none",
          buttonClass: "mt-2 mb-20"
        });
       }
   }

   resetForm = () => {
    this.setState({
      name: '',
      email: '',
      emailHelperText: 'Required',
      emailError: false,
      message: '',
      trailIcon: checked,
      trailAlt: "Required",
      formClass: "",
      introMessage: "Do you have a project where you need an experienced backend developer? Send me a line! All required fields are marked with an asterisk.",
      buttonClass: "display-none"
    })
  }

  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
  }

  render(){
    return(
      <>
        <div>
          <h1 id="contactRegion">Contact</h1>
          <p aria-live="polite" >{this.state.introMessage}</p>
        </div>
        <Button
          className={this.state.buttonClass}
          name="SEND ANOTHER EMAIL"
          variant="contained"
          color="primary"
          onClick={this.resetForm}
          style={{borderRadius: '20px', fontFamily: "Karla",}}

        >
        SEND ANOTHER EMAIL
        </Button>
        <form className={this.state.formClass} role="form" noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
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
              ref={(TextField) => { this.emailInput = TextField; }}
              required
              type="email"
              id="email"
              name="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img alt={this.state.trailAlt} src={this.state.trailIcon} />
                  </InputAdornment>
                ),
              }}
              onBlur={this.validate}
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
            style={{borderRadius: '20px', fontFamily: "Karla",}}
          >SEND
          </Button>
        </form>
      </>
    );
  }

}

export default InputForm;

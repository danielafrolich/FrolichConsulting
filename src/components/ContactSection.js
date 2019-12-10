import React from 'react';
import InputForm from "./InputForm"

class ContactSection extends React.Component{
  render(){
    return(
      <section className="contact centered-content" role="Contact content" aria-label="Form for contacting.">
        <div>
          <h1>Contact</h1>
          {/*TODO REMOVE WHEN DONE*/}
          <p>Do you have a project where you need an experienced backend developer? Send me a line! All required fields are marked with an asterisk.</p>
        </div>
          <InputForm />
      </section>
    );
  }
}

export default ContactSection;

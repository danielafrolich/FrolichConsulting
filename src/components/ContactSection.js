import React from 'react';
import InputForm from "./InputForm"

class ContactSection extends React.Component{
  render(){
    return(
      <section className="contact centered-content">
        <div>
          <h1>Contact</h1>
          <p>Do you have a project where you need an experienced backend developer? Send me a line!</p>
        </div>
          <InputForm />
      </section>
    );
  }
}

export default ContactSection;

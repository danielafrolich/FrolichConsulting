import React from 'react';
import InputForm from "./InputForm"

class ContactSection extends React.Component{
  render(){
    return(
      <section className="contact centered-content" role="region" aria-labelledby="contactRegion">
          <InputForm />
      </section>
    );
  }
}

export default ContactSection;

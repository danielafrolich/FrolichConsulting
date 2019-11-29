import React from 'react';
import MediaControlCard from "../components/Cards/Cards"

class WorkSection extends React.Component{
  render(){
    return(
      <section className="work">
        <div className="centered-content">
          <h1>Work</h1>
          <p>Here is a selection of my work experience. For more details see my resume.</p>
          <MediaControlCard />
        </div>
      </section>
    );
  }
}

export default WorkSection;

import React from 'react';
import degree from "../images/degree.svg";
import briefcase from "../images/briefcase.svg";
import code from "../images/code.svg";
import resume from "../images/resume.svg";
import profilePic from "../images/profile_pic.png";
import IconText from "./IconText"

class LandingText extends React.Component{
  render(){
    return(
      <section className="about centered-content">
        <div>
          <h1>About</h1>
        </div>
        <div className="flex align-items block">
          <img alt="Isabelle Frolich" src={profilePic} className="img-profile"/>
          <div className="ml-2">
            <IconText icon={degree} alt="Icon of degree"
              text="MSc in Software Engineering Chalmers University of Technology">
            </IconText>
            <IconText icon={briefcase} alt="Icon of briefcase"
              text="Over 3 years experience of working in agile teams and using Git and Jira for collaboration">
            </IconText>
            <IconText icon={code} alt="Icon of code"
            text="Knowledge in Java, Kotlin, Python, MySql and many others">
            </IconText>
            <IconText icon={resume} alt="Icon of resume"
              text="Read my resume or visit Linkedin profile for more details">
            </IconText>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingText;

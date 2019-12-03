import React from 'react';
import degree from "../images/degree.svg";
import briefcase from "../images/briefcase.svg";
import code from "../images/code.svg";
import resume from "../images/resume.svg";
import profilePic from "../images/profile_pic.png";
import IconText from "./IconText";
import resumePdf from "./../docs/CV_DanielaFrolich_Eng.pdf";

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
            <div className="flex align-items">
              <img alt="Icon of resume" src={resume} />
              <p className="ml-1">
              Read my <a target="_blank" rel="noopener noreferrer" href={resumePdf}>resume</a> or visit my <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/isabelle-fr%C3%B6lich-65ba02b1/">LinkedIn</a> for more details</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingText;

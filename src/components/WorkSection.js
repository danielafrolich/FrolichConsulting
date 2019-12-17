import React from 'react';
import Card from "./Cards/Card"
import LinkCard from "./Cards/LinkCard"
import ai from './../images/ai.png'
import volvo from './../images/volvo.png'
import capGemini from './../images/cap_gemini.png'
import telia from './../images/telia.png'
import resumePdf from "./../docs/CV_DanielaFrolich_Eng.pdf";
import linkIcon from './../images/icon_link.svg'

class WorkSection extends React.Component{
  render(){
    return(
      <section className="work" role="region" aria-labelledby="workRegion" aria-label="Isabelle Frölich work experience.">
        <div hidden>
          <span id="new-window">Opens in a new widow</span>
        </div>
        <div className="centered-content">
          <h1  id="workRegion">Work</h1>
          <p>Here is a selection of my work experience. For more details see my <a target="_blank" aria-describedby="new-window" rel="noopener noreferrer" href={resumePdf}>resume</a>.</p>
          <LinkCard
          cardMedia={ai}
          alt="Artificial Intelligence"
          altLink="New window"
          cardHeader="Master Thesis in AI"
          cardSubtitle="Chalmers & Ericsson"
          cardParagraph="The thesis examined the possibility of using machine learning algorithms to predict possible overloads in a specific node in a cellular network. The thesis resulted in a proof of concept which showed that machine learning could be used to predict overloads with good results."
          linkIcon={linkIcon}
          linkText="Full report"
          linkHref="https://odr.chalmers.se/bitstream/20.500.12380/250233/1/250233.pdf"
          >
          </LinkCard>
          <Card
          cardMedia={telia}
          alt="Telia"
          cardHeader="Software developer"
          cardSubtitle="Telia"
          cardParagraph="Started at Telia 2018 as a backend developer working with their aggregated streaming service. Here I learned to work with microservices that uses a wide variety of technologies and frameworks to optimize performance. I also gained 2 more years experience with programming in Kotlin and Java." >
          </Card>
          <Card
          cardMedia={capGemini}
          alt="Capgemini"
          cardHeader="Software developer"
          cardSubtitle="Capgemini"
          cardParagraph="I started at Capgemini as a graduate in their Ignite program and graduated after 1,5 years of training and courses. Thereafter I continued to work as a consultant for their clients developing my programming skills in, for example, Java and Kotlin." >
          </Card>
          <Card
          cardMedia={volvo}
          alt="Volvo"
          cardHeader="Software developer"
          cardSubtitle="Volvo Car Group"
          cardParagraph="Worked two summers at Volvo Car Group were my colleague and I explored and developed methods to automate the audio testing of the speakers in Volvo cars using Python. We  were able to develop three separate programs, written with Python, to help the audio testing group at Volvo with the automation of testing." >
          </Card>
        </div>
      </section>
    );
  }
}

export default WorkSection;

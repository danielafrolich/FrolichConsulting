import React from 'react';
import Card from "./Card/Card"
import ai from './../images/ai.png'
import volvo from './../images/volvo.png'
import capGemini from './../images/cap_gemini.png'
import telia from './../images/telia.png'

class WorkSection extends React.Component{
  render(){
    return(
      <section className="work">
        <div className="centered-content">
          <h1>Work</h1>
          <p>Here is a selection of my work experience. For more details see my <a target="_blank" rel="noopener noreferrer" href="docs/CV_DanielaFrolich_Eng.pdf">resume</a>.</p>
          <Card
          cardMedia={ai}
          alt="Artificial Intelligence"
          cardHeader="Master Thesis in AI"
          cardSubtitle="Chalmers & Ericsson"
          cardParagraph="The thesis examined the possibility of using machine learning algorithms to predict possible overloads in a specific node in a cellular network. The thesis resulted in a proof of concept which showed that machine learning could be used to predict overloads with good results." >
          </Card>
          <Card
          cardMedia={telia}
          alt="Telia"
          cardHeader="Software developer"
          cardSubtitle="Telia"
          cardParagraph="Lorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum bla." >
          </Card>
          <Card
          cardMedia={capGemini}
          alt="Cap Gemini"
          cardHeader="Software developer"
          cardSubtitle="Cap Gemini"
          cardParagraph="I started at Capgemini as a graduate in their Ignite program and graduated after 1,5 of training and courses. Thereafter I continued to work as a consultant for their clients developing my programming skills in, for example, Java and Kotlin." >
          </Card>
          <Card
          cardMedia={volvo}
          alt="Volvo"
          cardHeader="Software developer"
          cardSubtitle="Volvo Group"
          cardParagraph="Worked two summers at Volvo Car Group were my college and I explored and developed methods to automate the audio testing of the speakers in Volvo cars using Python. We  were able to develop three separate programs, written with Python, to help the audio testing group at Volvo with the automation of testing." >
          </Card>
        </div>
      </section>
    );
  }
}

export default WorkSection;

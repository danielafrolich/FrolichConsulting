import React from 'react';
import LandingText from "./components/LandingText"
import TextButton from "./components/TextButton"
import InputForm from "./components/InputForm"

function App() {
  return (
    <main>
      <section className="home">
        <LandingText></LandingText>
        <TextButton></TextButton>
      </section>
      <section className="about">
      </section>
      <section className="work">
      </section>
      <section className="contact">
        <InputForm></InputForm>
      </section>
    </main>
  );
}

export default App;

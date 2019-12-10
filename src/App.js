import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Drawer from "./components/Drawer/Drawer"
import Backdrop from "./components/Backdrop/Backdrop"
import AboutSection from "./components/AboutSection"
import WorkSection from "./components/WorkSection"
import ContactSection from "./components/ContactSection"
import HomeSection from "./components/HomeSection"

class App extends Component {
  state = {
    drawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({drawerOpen: false});
  }

  render() {
    let backdrop;

    if(this.state.drawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <Drawer show={this.state.drawerOpen}/>
        {backdrop}
        <main>
          <HomeSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
          <footer>
            <p className="center-vertical">© {(new Date().getFullYear())} Frolich Consulting</p>
          </footer>
        </main>
      </>
    );
  }
}

export default App;

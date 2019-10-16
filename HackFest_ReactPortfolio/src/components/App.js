import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.png";
import Title from './Title';


class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="Profile pic" className="profile" />
        <h1>Hello!</h1>
        <p>My name is AlFredo Valle.</p>
        {/* insert Title Component */}        
        <Title/>
        
        <p>My passion is working on innovative and productive projects!</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I'm from San Benito, Texas. 
            </p>
            <p>
              My favorit language is Javascript, along with  React and Angular
              as well.
            </p>
            <p>
              When I am not coding, I like to spend time in the outdoors fishing
              and camping, or playing drums!
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        {/* Social Profiles Component */}
        <SocialProfiles />
      </div>
    );
  }
}

export default App;


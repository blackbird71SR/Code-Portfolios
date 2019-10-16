import React, { Component } from "react";
import Search from './Search';
import Artist from "./Artist";
import Tracks from './Tracks';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = {
    artist: null,
    tracks: []
  };

  componentDidMount() {
    this.searchArtist('The Beatles');
    
  }


  searchArtist = artistQuery => {
    // fetch artist data from spotify api wrapper
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        // only return top tracks if artist returns results
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          // ES6 - this is equivalent to { artist: artist }
          this.setState({ artist });

          // fetch top ten tracks for selected artist
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  };

  render() {
    console.log("this.state: ", this.state);

    return (
      <div>
        <h2>Music Masters</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;

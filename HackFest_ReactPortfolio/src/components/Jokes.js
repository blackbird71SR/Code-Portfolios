import React, { Component } from 'react';

// single place for rendering Jokes
const Joke = ({ joke : { setup, punchline } }) => (
    <p style={{ margin: 20}}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: []  }; // add jokes array for fetching 10 jokes

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json}))
        .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json}))
        .catch(error => alert(error.message));
    }

    render() {        
        return (
            <div>
                <h2>Highlighted Joke</h2>
                {/* use Joke stateless component, pass props */}
                <Joke joke={this.state.joke} />  
                <hr />
                <h3>10 more jokes???</h3>
                <button onClick={this.fetchJokes} >Click me!</button>
                {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} /> ))}
            </div>
        )
    }
}

export default Jokes;


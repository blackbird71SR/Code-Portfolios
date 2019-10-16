import React, {Component } from 'react';

const TITLES = [
    'a software developer.', 
    'a lifelong learner.',
    'an avid reader.',
    'a nature admirer.',
    'a drums enthusiast.'
];

class Title extends Component {
    state = { titleIndex: 0,
              fadeIn: true              
            };
    
    // component is inserted into DOM
    componentDidMount() {
        //console.log('Title component mounted.');
        this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 3000);

        this.animateTitles();
    }
    
    componentWillUnmount() {
        //console.log('Title Component will unmount.')
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            // using modulus operator % to reset back 0 index
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 2000);
        }, 4000);

        //console.log('this.titleInterval', this.titleInterval);
        
    }

    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;
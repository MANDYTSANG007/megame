import React, {Component} from 'react';
import Nav from './Nav';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import data from '../data.json';

//set up class component
//set initial state
class Game extends Component {
    state = { 
        data,
        score: 0,
        topScore: 0
    };

    //declare componentDidMount - after component is mounted, this will be immidately invoked
    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0){
            const j = Math.floor(Math.random() * (i+1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    }

    render() {
    return (
        <div>
            <Nav score={this.state.score} topScore={this.state.topScore} />
            <Header />
            <Container>
                <h1> content </h1>
            </Container>
            <Footer />
        </div>
    )
}
}
export default Game;
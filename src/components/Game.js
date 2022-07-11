import React, {Component} from 'react';
import Nav from './Nav';
import Container from './Container';
import Footer from './Footer';
// import Header from './Header';
import data from '../data.json';
import ClickItem from './ClickItem';
import Alert from './Alert';
import WinningAlert from './WinningAlert';

//set up class component
//set initial state
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            score: 0,
            topScore: 0,
            alert: false,
            winningAlert: false
        }
    }

    handleAlert = () => {
        this.setState({
            winningAlert: false,
            alert: false,
            score: 0,
        })
    }

    handleAlert2 = newData => {
        this.setState({
            data: this.resetData(newData),
            winningAlert: true,
            alert: false,
            score: 0,
        })
    }

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    }

    //declare componentDidMount - after component is mounted, this will be immidately invoked
    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleCorrectGuess = newData => {
        const { score, topScore } = this.state;  //we use object destructuring {topScore, score} to unpack values from arrays, or properties from objects, into distinct variables. 
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore); // Syntax: Math.max(value1, value2, ...) , the output is the max among all those values.

        const perfectScore = (newScore === 12 && newTopScore === 12);
        if (perfectScore){
        this.setState({
            data: this.shuffleData(newData), //setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.This is the primary method you use to update the UI in response to event handlers and server responses. 
            score: newScore,
            topScore: newTopScore,
            winningAlert: true,
            alert: false,
        })} else {
            this.setState({
                data: this.shuffleData(newData), //setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.This is the primary method you use to update the UI in response to event handlers and server responses. 
                score: newScore,
                topScore: newTopScore,
                alert: false,
        })};
        console.log(this.setState.data);
        this.shuffleData();
    };

    handleIncorrectGuess = newData => { //if answered incorrectly, it reset the whole data and set the score back to 0
        this.setState({
            data: this.resetData(newData),
            score: 0,
            alert: true,
        });
    };

    resetData = data => { 
        const resetData = data.map(item => ({ ...item, clicked: false }));      //all items change to clicked: false to reset
        return this.shuffleData(resetData);
    }

    //when user clicks on an image
    handleItemClick = id => {
        let guessedCorrectly = false;   //let is changable, later we will see guessedCorrectly could be changed
        const newData = this.state.data.map(item => {  //const is immutable, 
            const newItem = { ...item };  //create this newItem to store new items in the item object
            if (newItem.id === id){         //if the newItem's id is equivalent to the existing id in the parameter condition is true, or should I say if the newItem's id is in the parameter
                if (!newItem.clicked) {     // nested if statement: if condition1 is true (if the newItem hasn't been clicked?) and if condition2 is also true...
                    newItem.clicked = true; //condition2: if NO newItem is clicked, 
                    guessedCorrectly = true;    //now the newItem and gussedCorrectly have set it to true
                }
            }
            return newItem;
        });
        guessedCorrectly    //ternary operator: if guessedCorrectly is truthy, then go to handleCorrectGuess(using newData)
            ? this.handleCorrectGuess(newData)
            : this.handleIncorrectGuess(newData);
    };

    render() {
    return (
        <div>
            <Nav score={this.state.score} topScore={this.state.topScore} />
            {/* <Header /> */}
            <Container>
                {this.state.data.map(item => (
                    <ClickItem
                        key={item.id}
                        id={item.id}
                        shake={!this.state.score && this.state.topScore}
                        handleClick={this.handleItemClick}
                        image={item.image}
                    />
                ))}
                {this.state.alert ? <Alert handleAlert={this.handleAlert} /> : console.log("no alert")}
                {this.state.winningAlert ? <WinningAlert handleAlert2={this.handleAlert} /> : console.log("no alert")}

            </Container>
            <Footer />
        </div>
    );
};
};
export default Game;

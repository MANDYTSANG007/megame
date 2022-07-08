import React, {Component} from 'react';
import './style.css';

class ScoreMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            animating: false
        };
    };

    //This section is invoked immediately every time the updating occurs. Syntax: componentDidUpdate(prevProps, prevState)
    componentDidUpdate ({ score, topScore }, prevState) {
        const newState = { animating: true };   //create an object named newState

        if (score === 0 && topScore === 0) { 
            newState.message = "";
        } else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
        } else if (score === 2 && topScore === 2) {
            newState.message = "win";
        } else {
            newState.message = "correct";
        }

        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);        //re-render with newState if the existing score is not the same as the props score OR the message is not the same as the newState message
        }
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You guessed correctly!";
            case "incorrect":
                return "You've clicked this already!";
            case "win":
                return "You Win!"
            default:
                return "Click an image to begin.";
        }
    };

    render() {
        return (
            <li
                className={this.state.animating 
                ? this.state.message
                : ""}
                onAnimationEnd={() => this.setState({animating: false })}
            >
                {this.renderMessage()}
            </li>
        )
    };
};

export default ScoreMessage;


//  the ScoreMessage part doesn't have any issue. 
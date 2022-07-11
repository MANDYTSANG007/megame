import React from 'react';
import './style.css';

class ClickItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('click happened');
    }
    render(){
        return (
            <div
                role='img'
                aria-label='click item'
                onClick={() => this.props.handleClick(this.props.id)}     
                style={{backgroundImage: `url(${this.props.image})`, 'backgroundPosition': 'top'}}
                className={`click-item${this.shake ? "shake" : ""}`}
                >
                </div>
        );
    };
};
export default ClickItem;
import React from 'react';
import './style.css';



// function ClickItem(props) {
//     return (
//         <div
//             role='img'
//             aria-label='click item'
//             onClick={() => props.handleClick(props.id)}
//             style={{ backgroundImage: `url("${props.image})` }}
//             className={`click-item${props.shake ? "shake" : ""}`}
//         />
//     )
// }

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
            onClick={() => this.handleClick(this.props.id)}     
            // style={{ backgroundImage: `url(${this.image})` }}
            //style={{ backgroundImage: `url(${process.env.PUBLIC_URL+'this.image'})`}}
            // style={{ backgroundImage: "url(this.image)"}}
            // style={{backgroundImage: `url(/assets/images/me6.png)`}}
            style={{backgroundImage: `url(${this.props.image})`}}
            className={`click-item${this.props.shake ? "shake" : ""}`}
        />
        );
    };
};
export default ClickItem;
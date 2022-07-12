import React from 'react';
import './style.css';

    class ClickItem extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            console.log('click happened');
        }
        render() {
            return (
                <div>
                    <img 
                        style={{height: "170px", width: "150px"}}
                        src={process.env.PUBLIC_URL+`${this.props.image}`}
                        onClick={() => this.props.handleClick(this.props.id)}
                        aria-label='click item'
                        role='img'
                        className={`click-item${this.shake ? "shake" : ""}`}
                    ></img>

                </div>
                // <div
                //     role='img'
                //     aria-label='click item'
                //     onClick={() => this.props.handleClick(this.props.id)}
                //     style={{ backgroundImage: `url(${this.props.image})`, 'backgroundPosition': 'top' }}
                //     className={`click-item${this.shake ? "shake" : ""}`}
                // >
                // </div>
            );
        };
    };
export default ClickItem;
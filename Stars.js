import React from "react";
import './styles.css';

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            score: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({score: state.score + 1}));
    }

    render() {
        return (
            <button
                className='btn w3-white'
                onClick={this.handleClick}>
                {this.state.name} {this.state.score}
            </button>
        );
    }
}
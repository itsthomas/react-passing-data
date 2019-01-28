import React, { Component } from 'react';

class ChildThree extends Component {
  state = {};
  render() {
    return (
      <button onClick={this.props.onClick}>
        Change the state in the parent component
      </button>
    );
  }
}

export default ChildThree;

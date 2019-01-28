import React, { Component } from 'react';

// Passing data from parent ot a Class Component
class ChildOne extends Component {
  state = {};

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        The name and age data were passed from the parent component to the first
        child component:
        <br />
        {this.props.parentName} is {this.props.parentAge} years old.
      </React.Fragment>
    );
  }
}

export default ChildOne;

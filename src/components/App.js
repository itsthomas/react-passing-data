import React, { Component } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';
import './App.css';

class App extends Component {
  state = {
    parentName: 'Thomas',
    parentAge: 26,
    parentHeight: '180cm',
    parentWeight: '80 Kg'
  };

  handleChange = () => {
    this.setState({ parentName: 'John', parentAge: 42 });
  };

  render() {
    return (
      <React.Fragment>
        {/* Passing data from parent to child */}
        <ChildOne
          parentName={this.state.parentName}
          parentAge={this.state.parentAge}
        />
        <hr />
        <ChildTwo
          parentHeight={this.state.parentHeight}
          parentWeight={this.state.parentWeight}
        />
        <hr />
        <ChildThree onClick={this.handleChange} />
      </React.Fragment>
    );
  }
}

export default App;

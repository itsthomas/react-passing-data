import React from 'react';

// Passing data from parent to a Functional component
const ChildTwo = props => {
  console.log(props);

  return (
    <React.Fragment>
      The height and weight data were passed from the parent component to the
      second child component:
      <br />
      He is {props.parentHeight} and {props.parentWeight} heavy.
    </React.Fragment>
  );
};

export default ChildTwo;

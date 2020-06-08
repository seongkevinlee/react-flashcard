import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null
    };
  }

  render() {
    return (
      <h1 className='text-center'>Flash Card App</h1>
    );
  }

}

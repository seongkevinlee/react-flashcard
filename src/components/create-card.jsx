import React from 'react';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: 'null',
      cardBack: 'null'
    };
  }

  render() {
    return (
      <h1 className='text-center'>Create New Card</h1>
    );
  }

}

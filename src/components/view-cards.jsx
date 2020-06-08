import React from 'react';

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: 'null',
      cardBack: 'null'
    };
  }

  render() {
    return (
      <h1 className='text-center'>My Cards</h1>
    );
  }

}

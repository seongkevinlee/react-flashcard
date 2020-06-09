import React from 'react';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: 'null',
      cardBack: 'null'
    };
  }

  componentDidMount() {
    this.props.setActiveCard(0);
  }

  render() {
    // console.log('this.props', this.props);
    return (
      <h1 className='text-center'>Review Cards</h1>
    );
  }

}

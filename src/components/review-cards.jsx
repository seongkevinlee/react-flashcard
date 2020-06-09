import React from 'react';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardIndex: 0
      // cardFront: this.props.cards[this.state.activeCardIndex].question,
      // cardBack: this.props.cards[this.state.activeCardIndex].answer
    };

    this.nextCard = this.nextCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  componentDidMount() {
    this.setActiveCard();
    // this.nextCard();
  }

  setActiveCard() {
    const cardList = this.props.cards;
    const activeCard = cardList[this.state.activeCardIndex];
    this.setState({
      activeCard
    });
  }

  nextCard() {
    this.setState({
      cardFront: this.props.activeCard.question,
      cardBack: this.props.activeCard.answer
    });
    // const { cards } = this.props;
    // const { activeCard } = this.props;
    // console.log('nextCard props:', this.props);
    // const nextCardIndex = activeCard.indexOf(activeCard);
    // console.log('nextCardIndex:', nextCardIndex);
  }

  render() {
    return (
      <div>
        <h1 className='text-center' onClick={this.nextCard}>Review Cards</h1>

      </div>
    );
  }

}

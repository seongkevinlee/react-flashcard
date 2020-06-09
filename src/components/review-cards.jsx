import React from 'react';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardIndex: 0
    };

    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    // this.setActiveCard = this.setActiveCard.bind(this);
  }

  // componentDidMount() {
  //   this.setActiveCard();
  // }

  // setActiveCard() {

  // }

  nextCard() {
    let nextCardIndex = this.state.activeCardIndex;
    nextCardIndex++;
    this.setState({
      activeCardIndex: nextCardIndex
    });
  }

  previousCard() {
    let nextCardIndex = this.state.activeCardIndex;
    nextCardIndex--;
    this.setState({
      activeCardIndex: nextCardIndex
    });
  }

  render() {
    const cardList = this.props.cards;
    const cardFront = cardList[this.state.activeCardIndex].question;
    // const cardBack = cardList[this.state.activeCardIndex].answer;

    return (
      <div>
        <h1 className='text-center' onClick={this.nextCard}>Review Cards</h1>
        <div id='carouselControls' className="carousel slide carousel-container d-flex align-items-center" data-ride='carousel'>
          <div className="carousel-inner">
            <div className="carousel-item active d-flex justify-content-center align-items-center">
              <h4>{cardFront}</h4>
            </div>
          </div>
          <a id='carousel-prev'
            className="carousel-control-prev"
            role='button'
            data-slide='prev'>
            <span className="carousel-control-prev-icon"
              onClick={this.previousCard}></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            role='button'
            data-slide='next'>
            <span className="carousel-control-next-icon" onClick={this.nextCard}></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }

}

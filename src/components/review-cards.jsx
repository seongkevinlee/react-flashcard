import React from 'react';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardIndex: 0,
      isFlipped: false
    };

    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.setActiveCardClass = this.setActiveCardClass.bind(this);
  }

  nextCard() {
    let nextCardIndex = this.state.activeCardIndex;
    if (this.state.activeCardIndex === this.props.cards.length - 1) {
      this.setState({
        activeCardIndex: 0
      });
    } else {
      nextCardIndex++;
      this.setState({
        activeCardIndex: nextCardIndex
      });
    }

  }

  previousCard() {
    let nextCardIndex = this.state.activeCardIndex;
    if (this.state.activeCardIndex === 0) {
      this.setState({
        activeCardIndex: this.props.cards.length - 1
      });
    } else {
      nextCardIndex--;
      this.setState({
        activeCardIndex: nextCardIndex
      });
    }
  }

  flipCard() {
    if (this.state.isFlipped) {
      this.setState({
        isFlipped: false
      });
    } else {
      this.setState({
        isFlipped: true
      });
    }
  }

  setActiveCardClass() {
    if (!this.state.isFlipped) {
      return 'carousel slide carousel-container d-flex align-items-center rounded bg-dark text-white';
    } else {
      return 'carousel slide carousel-container d-flex align-items-center rounded bg-secondary text-white';
    }
  }

  render() {
    const cardList = this.props.cards;
    const cardFront = cardList[this.state.activeCardIndex].question;
    const cardBack = cardList[this.state.activeCardIndex].answer;

    return (
      <div className='col-8 m-auto text-center'>
        <h1 className='text-center'>Review Cards</h1>
        <div id='carouselControls' className={this.setActiveCardClass()} data-ride='carousel' onClick={this.flipCard}>
          <div className="carousel-inner">
            <div className="carousel-item active d-flex justify-content-center align-items-center">
              <h4>
                {
                  this.state.isFlipped ? cardBack : cardFront
                }
              </h4>
            </div>
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
    );
  }

}

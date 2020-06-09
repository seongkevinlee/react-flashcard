import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };

    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  setView(currentView) {
    this.setState({
      view: currentView
    });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard}/>;
      case 'review-cards':
        return <ReviewCards cards={this.state.cards} />;
      case 'view-cards':
        return <ViewCards cardList={this.state.cards} onClick={this.getCards}/>;
      default:
        return null;
    }
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    const savedCardList = JSON.parse(localStorage.getItem('flash-cards'));
    if (savedCardList) {
      this.setState({
        cards: savedCardList
      });
    } else {
      this.setState({
        cards: []
      });
    }
  }

  saveCards() {
    const cardsList = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', cardsList);
    this.getCards();
  }

  addCard(card) {
    const cardsList = [...this.state.cards];
    cardsList.push(card);
    this.setState({
      cards: cardsList
    }, () => this.saveCards());
  }

  render() {
    return (
      <div>
        <Nav setView={this.setView}/>
        <div className='col-12'>
          {this.getView()}
        </div>
      </div>
    );
  }

}

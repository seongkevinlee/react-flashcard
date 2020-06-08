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
  }

  setView(currentView) {
    this.setState({
      view: currentView
    });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard/>;
      case 'review-cards':
        return <ReviewCards/>;
      case 'view-cards':
        return <ViewCards/>;
      default:
        return null;
    }
  }

  saveCards() {
    const cardsList = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', cardsList);
  }

  addCard(card) {
    const cardsList = this.state.cards;
    cardsList.push(card);
    this.setState({
      cards: cardsList
    });
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

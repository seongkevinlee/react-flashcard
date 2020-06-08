import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    };
  }

  setView(view) {
    this.setState({
      view: view
    });
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>Flash Card App</h1>
        <CreateCard/>
        <ReviewCards/>
        <ViewCards/>
      </div>
    );
  }

}

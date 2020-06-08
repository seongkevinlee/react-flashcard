import React from 'react';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  render() {
    return (
      <div className='container col-8'>
        <header>
          <h1 className='text-center'>Create New Card</h1>
        </header>
        <div>
          <form>
            <div className='form-group'>
              <label htmlFor="question-text">Question</label>
              <textarea className='form-control' name="question-text" id="question-text" rows="3"></textarea>
            </div>
            <div className='form-group'>
              <label htmlFor="answer-text">Answer</label>
              <textarea className='form-control' name="answer-text" id="answer-text" rows="3"></textarea>
            </div>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-outline-danger'>Cancel</button>
              <button className='btn btn-outline-success'>Save Card</button>
            </div>
          </form>
        </div>

      </div>
    );
  }

}

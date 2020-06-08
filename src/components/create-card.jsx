import React from 'react';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'question-text') {
      this.setState({
        question: event.target.value
      });
    }
    if (event.target.id === 'answer-text') {
      this.setState({
        answer: event.target.value
      });
    }
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    return (
      <div className='container col-8'>
        <header>
          <h1 className='text-center'>Create New Card</h1>
        </header>
        <div>
          <form onSubmit={this.handleCancel} onReset={this.handleCancel}>
            <div className='form-group'>
              <label htmlFor="question-text">Question</label>
              <textarea
                className='form-control'
                name="question-text"
                id="question-text"
                rows="3"
                onChange={this.handleChange}
                value={this.state.question}>
              </textarea>
            </div>
            <div className='form-group'>
              <label htmlFor="answer-text">Answer</label>
              <textarea
                className='form-control'
                name="answer-text"
                id="answer-text"
                rows="3"
                onChange={this.handleChange}
                value={this.state.answer}>
              </textarea>
            </div>
            <div className='d-flex justify-content-end'>
              <button type='submit' className='btn btn-outline-danger'>Cancel</button>
              <button type='reset' className='btn btn-outline-success'>Save Card</button>
            </div>
          </form>
        </div>

      </div>
    );
  }

}

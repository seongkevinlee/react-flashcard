import React from 'react';

function FlashCard(props) {
  const question = props.card.question;
  const answer = props.card.answer;
  const index = props.id;

  return (
    <div className='col mb-4'>
      <div className='card'>
        <div className='card-body text-left text-white bg-dark rounded-top'>
          <h5 className='card-title ml-2 mt-2'>Question</h5>
          <p className='card-text ml-2 mt-2'>{question}</p>
        </div>
        <div className='card-body text-left'>
          <h5 className='card-title ml-2 mt-2'>Answer</h5>
          <p className='card-text ml-2 mt-2'>{answer}</p>
        </div>
        <div className='col-12 text-center bg-dark rounded-bottom'>
          <i className='fas fa-trash-alt m-3 text-white' onClick={() => props.onDelete(index)}></i>
        </div>
      </div>
    </div>
  );
}

export default function ViewCards(props) {
  const { cardList } = props;
  return (
    <div>
      <header>
        <h1 className='text-center'>My Cards</h1>
      </header>
      <div className='row row-cols-2 row-cols-md-2'>
        {cardList.length > 0 ? cardList.map((card, index) => {
          return (<FlashCard key={index} id={index} card={card} onDelete={props.deleteCard}/>);
        }) : <div className='col-12 mt-4'><h4><em>(No Cards Saved.)</em></h4></div>
        }
      </div>
    </div>
  );

}

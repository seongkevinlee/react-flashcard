import React from 'react';

function FlashCard(props) {
  const question = props.card.question;
  const answer = props.card.answer;

  return (
    <div className='col mb-4'>
      <div className='card'>
        <div className='card-body text-left text-white bg-dark'>
          <h5 className='card-title ml-2 mt-2'>Question</h5>
          <p className='card-text ml-2 mt-2'>{question}</p>
        </div>
        <div className='card-body text-left'>
          <h5 className='card-title ml-2 mt-2'>Answer</h5>
          <p className='card-text ml-2 mt-2'>{answer}</p>
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
        {cardList.map((card, index) => {
          return (
            <FlashCard key={index} card={card}/>
          );
        })
        }
      </div>
    </div>
  );

}

import React from 'react';

function FlashCard(props) {
  // const cardList = props.cardList;
  // const question = props.cardList.question
  // const answer = props.cardList.answer

  return (
    <div className='col mb-4'>
      <div className='card'>
        <div className='text-center'>
          <h5 className='card-title'>Card Front</h5>
        </div>
        <div className='card-body text-center'>
          <p className='card-text'>Card Back</p>
        </div>
      </div>
    </div>
  );
}

export default function ViewCards(props) {

  // const cardList = props.cardList;
  // console.log('cardList:', cardList);

  return (
    <div>
      <header>
        <h1 className='text-center'>My Cards</h1>
      </header>
      <div className='row row-cols-2 row-cols-md-2'>
        <FlashCard/>
        <FlashCard/>
        <FlashCard/>
        <FlashCard/>
      </div>
    </div>
  );

}

import React from 'react';

export default function Nav(props) {

  return (
    <div className='container d-flex justify-content-end col-12'>
      <button
        onClick={() => props.setView('view-cards')}
        className='btn btn-outline-primary'>
          View Cards
      </button>
      <button
        onClick={() => props.setView('review-cards')}
        className='btn btn-outline-primary'>
          Review Cards
      </button>
      <button
        onClick={() => props.setView('create-card')}
        className='btn btn-outline-primary'>
          Create Cards
      </button>
    </div>
  );
}

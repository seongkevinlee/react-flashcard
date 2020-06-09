import React from 'react';

export default function Nav(props) {

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container d-flex justify-content-end col-12'>
        <button
          onClick={() => props.setView('view-cards')}
          className='btn btn-dark'>
            View Cards
        </button>
        <button
          onClick={() => props.setView('review-cards')}
          className='btn btn-dark'>
            Review Cards
        </button>
        <button
          onClick={() => props.setView('create-card')}
          className='btn btn-dark'>
            Create Cards
        </button>
      </div>
    </nav>
  );
}

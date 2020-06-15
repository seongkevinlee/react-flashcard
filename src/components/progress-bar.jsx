import React from 'react';

export default function ProgressBar(props) {
  const index = props.percentComplete().index;
  const length = props.percentComplete().length;

  const style = {
    width: props.percentComplete().percentComplete + '%'
  };

  return (
    <div className="progress">
      <div
        className='progress-bar'
        style={style}
        role='progressbar'
        aria-valuenow='75'
        aria-valuemin='0'
        aria-valuemax='100'>
        {`${index}/${length}`}
      </div>
    </div>
  );
}

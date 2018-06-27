import React from 'react';

const Card = props => {
  const imageUrl = '/cardImages/' + props.card.imageUrl;
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top card-view" src={imageUrl} alt="Card" />
    </div>
  );
};

export default Card;

import React from 'react';

const Card = (props) => {
	const { imageUrl } = props.card;
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img
				className='card-img-top'
				src={imageUrl}
				alt='Card'
			/>
			<div className='hand card-body container'>
				<button href='#' className='btn btn-primary'>
					Use
				</button>{' '}
				<button className='btn btn-primary'>Discard</button>
			</div>
		</div>
	);
};

export default Card;

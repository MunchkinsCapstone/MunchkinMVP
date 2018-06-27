import React from 'react';
import Card from './Card';

const Modal = (props) => {
	const hand = props.player.hand ? props.player.hand : [{name: 'nothing', imageUrl: 'http://www.worldofmunchkin.com/cards/portablehole/img/cover_lg.jpg' }];
	return (
		<div>
			<button
				type='button'
				className='btn btn-white'
				data-toggle='modal'
				data-target='.bd-example-modal-lg'
			>
				Hand
			</button>

			<div
				className='modal fade bd-example-modal-lg'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='myLargeModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='container'>
							{hand.map((card, index) => {
								return (<Card key={`${props.player.name}-card-${index}`} card={card}/>);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

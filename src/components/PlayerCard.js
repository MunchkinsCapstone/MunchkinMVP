import React from 'react';
import Modal from './Modal';

const PlayerCard = (props) => {
	const { player } = props;
	let color = player === player.game.currentPlayer ? 'primary' : 'secondary';
	if (player.inBattle) color = 'danger';
	return (
		<div className={`card text-white bg-${color} mb-3`}>
			<div className='card-header player-card-top'>
				<h5>Level: {player.level}</h5>
				<h4>{player.name}</h4>
				<h5>Attack: {player.attack}</h5>
			</div>
			<div className='card-body player-card-button'>
				<Modal player={player}/>
				<button type='button' className='btn btn-light'>
					Equipment
				</button>
				<button type='button' className='btn btn-white'>
					Assist
				</button>
				<button type='button' className='btn btn-white'>
					Trade
				</button>
			</div>
		</div>
	);
};

export default PlayerCard;

import React from 'react';

// decription, name, price
const ProductCard = (props) => {
	return (
		<div style={{ width: "200px", border: '1px solid black', padding: '10px', margin: '10px' }}>
			<div>
				<h2>{props.name}</h2>
			</div>
			<div>
				<p>{props.description}</p>
			</div>
			<div>
				<p>{props.price}</p>
			</div>
			{props.arrival_time && (
				<div>
					<p>{props.arrival_time}</p>
				</div>
			)}
		</div>
	);
};

export default ProductCard;

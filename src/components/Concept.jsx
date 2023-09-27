import React from 'react';

function Concept({ conceptNo }) {
	return (
		
			<li className="concept">
				<img src={`${conceptNo.image}`} alt={conceptNo.title} />
				<h2>{conceptNo.title}</h2>
				<p>{conceptNo.description}</p>
			</li>
		
	);
}

export default Concept;

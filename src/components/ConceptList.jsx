import React from 'react';
import Concept from './Concept';

function ConceptList({ concepts }) {
	return (
		<div>
			<ul id="concepts">
				<Concept conceptNo={concepts[0]} />
				<Concept conceptNo={concepts[1]} />
				<Concept conceptNo={concepts[2]} />
			</ul>
		</div>
	);
}

export default ConceptList;

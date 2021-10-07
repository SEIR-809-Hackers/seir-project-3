import React from 'react';
import {Link} from 'react-router-dom'

function ParkItem({parks}) {
    return (
			<div>
				{parks.map((park) => (
					<Link to={'/parks/' + park._id} style={{ textDecoration: 'none' }}>
						<h2>{park.parkName}</h2>
					</Link>
				))}
			</div>
		);
}

export default ParkItem;

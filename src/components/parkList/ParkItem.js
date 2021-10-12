import React from 'react';
import {Link} from 'react-router-dom'
// import './ParkList.css';

function ParkItem({parks}) {
    return (
			<div className='park-list list'>
				{parks.map((park,id) => (
					<Link to={'/parks/' + park._id} key={id} style={{ textDecoration: 'none' }}>
						<h2>{park.parkName}</h2>
					</Link>
				))}
			</div>
		);
}

export default ParkItem;

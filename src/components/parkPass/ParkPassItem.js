import React from 'react';
import {Link} from 'react-router-dom'
import MainList from '../styles/list';
function ParkPassItem({user}) {

    let parks = user[0].myParks


    return (
			<MainList>
				{parks.map((seen) => (
					<Link
						to={'/parks/' + seen.park._id}
						style={{ textDecoration: 'none' }}>
						<p>{seen.park.ParkName}</p>
					</Link>
				))}
			</MainList>
		);
}

export default ParkPassItem;
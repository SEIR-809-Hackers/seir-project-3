import React from 'react';
import {Link} from 'react-router-dom'
import MainList from '../styles/list';
function ParkPassItem({user}) {

    let parks = user[0].myParks


    return (
			<MainList>
				{parks.map((select) => (
					<Link
						to={'/parks/' + select.park._id}
						style={{ textDecoration: 'none' }}>
						<p>{select.park.parkName}</p>
                        {select.seen ? <p>(hiked)🥾</p> : <p>(want to see)🏔</p>}
					</Link>
				))}
			</MainList>
		);
}

export default ParkPassItem;
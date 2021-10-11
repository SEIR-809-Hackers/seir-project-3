import React from 'react';
import {Link} from 'react-router-dom'
import MainList from '../styles/list';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';


function ParkPassItem({user}) {
	const { currentUser, setCurrentUser } = useContext(DataContext);
    let parks = currentUser.myParks

    return (
			<MainList>
				{parks.length ? 
				parks.map((select) => (
					<Link
						to={'/parks/' + select.park._id}
						style={{ textDecoration: 'none' }}>
						<p>{select.park.parkName}</p>
                        {select.seen ? <p>(hiked)🥾</p> : <p>(want to see)🏔</p>}
					</Link>
				)) :
				<h2>Add Parks</h2>
				}
				{}
			</MainList>
		);
}

export default ParkPassItem;
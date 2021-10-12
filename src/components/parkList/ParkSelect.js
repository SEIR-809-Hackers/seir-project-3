import React from 'react';
import {Link} from 'react-router-dom'
import parkselect from '../../assets/parkselect.jpg'

function ParkSelect(props) {
    return (
        <div>
            <div>
				<div className='no-parks-image'>
					<h3>
						<Link to='/parks'>Select A Park To Get Started!</Link>
					</h3>

					<img className='map-image' alt='man reading map' src={parkselect}></img>
				</div>
			</div>
        </div>
    );
}

export default ParkSelect;
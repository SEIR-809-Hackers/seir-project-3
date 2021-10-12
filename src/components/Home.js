import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
			<div className='main-page'>
				<div className='main-heading'>
					<h2>Start Your Adventure</h2>
					<Link to='/parks'>
						<button className='btn'>Explore</button>
					</Link>
				</div>
				<div className='intro'>
					<div>
						Join The Club
					</div>
					<div>
						Find Parks
					</div>
					<div>
						Plan Your Trip
					</div>
				</div>
			</div>
		);
}

export default Home;
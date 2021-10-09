import React from 'react';
import { act } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import PrimaryButton from './styles/Buttons';
import MainPark from './styles/park';
import axios from 'axios';

function ParkDetail({ parks, user }) {
	const { id } = useParams();

	let selectPark = parks.find((park) => {
		return id === park._id;
	});
	let url = `https://fast-springs-20221.herokuapp.com/parks/wantToSee/${id}/users/615f4a1ae1c62263e3fcd002`;
	let seenUrl = `https://fast-springs-20221.herokuapp.com/parks/parksSeen/${id}/users/615f4a1ae1c62263e3fcd002`;

	let activities = selectPark.activities;

	//'/wantToSee/:id/users/:userId'
	async function setHiked(event) {
		event.preventDefault();
		event.preventDefault();
		try {
			let res = await axios.put(seenUrl)
		} catch (error) {}
	}

	async function setWantToSee(event) {
		event.preventDefault();
		try {
			let res = await axios.put(url)
		} catch (error) {}
		
	}

	 return (
			<MainPark>
				<div className='container'>
					<img
						className='park-image'
						src={`${selectPark.images[0].url}`}
						alt='trees'
						style={{ width: '100%' }}
					/>
					<div className='centered'>
						<h3>{selectPark.parkName}</h3>
					</div>
				</div>
				<div className='park-details'>
					<p>{selectPark.parkDetails}</p>
					<div>
						<PrimaryButton onClick={setHiked}>HIKED 🥾</PrimaryButton>
						<PrimaryButton onClick={setWantToSee}>WANT TO SEE ⛰</PrimaryButton>
					</div>
				</div>
				<div className='acts'>
						{!selectPark.activities.length ? null : (
							<div className='act-main'>
								<h3>Activities:</h3>

								<div className='activities'>
									{selectPark.activities.map((act) => (
										<p>{act.name}</p>
									))}
								</div>
							</div>
						)}
				</div>
			</MainPark>
		);
}

export default ParkDetail;

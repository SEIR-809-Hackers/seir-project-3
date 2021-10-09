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
				<div>
					<h1>{selectPark.parkName}</h1>
					<img
						className='park-image'
						src={`${selectPark.images[0].url}`}
						alt='trees'
					/>
				</div>
				<div>
					<p>{selectPark.parkDetails}</p>
					<div>
						<PrimaryButton onClick={setHiked}>HIKED 🥾</PrimaryButton>
						<PrimaryButton onClick={setWantToSee}>WANT TO SEE ⛰</PrimaryButton>
					</div>
				</div>

				{/* {selctPark.activities <h3>Activities:</h3>
				{activities.map((act) => (
					<p>{act.name}</p>
				))}} */}
			</MainPark>
		);
}

export default ParkDetail;

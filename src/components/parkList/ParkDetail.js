import React from 'react';
import { act } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import PrimaryButton from '../styles/Buttons';
import MainPark from '../styles/park';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ParkDetail({ parks, user }) {
	const { currentUser, setCurrentUser } = useContext(DataContext);
	const id = useParams();
	const userId = currentUser._id

	let selectPark = parks.find((park) => {
		return id.id === park._id;
	});

	let url = `https://fast-springs-20221.herokuapp.com/parks/wantToSee/${id.id}/users/${userId}`;
	let seenUrl = `https://fast-springs-20221.herokuapp.com/parks/parksSeen/${id.id}/users/${userId}`;

	async function setHiked(event) {
		event.preventDefault();
		console.log(JSON.parse(localStorage.getItem('token')));
		console.log(id.id);
		console.log(userId);
		try {
			const res = await fetch(
				seenUrl,
				{
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')
						)}`,
					},
				}
			);
			console.log(res);
		} catch (error) {
			console.log(error.response.data);
		}
	}

	async function setWantToSee(event) {
		event.preventDefault();
		try {
			console.log(localStorage.getItem('token'));
			const res = await fetch(
				url,
				{
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			console.log(res);
		} catch (error) {
			console.log(error.response.data);
		}
		
	}

	if (selectPark === undefined) {
		return <h1>Pick A Park to Get Started!</h1>
	}

	 return (
			<div>
				<div className='container'>
					{/* <img
						className='park-image'
						src={`${selectPark.images[0].url}`}
						alt='trees'
						style={{ width: '100%' }}
					/> */}
					<Carousel
						showArrows={true}
						autoPlay={true}
						infiniteLoop={true}
						stopOnHover={true}
						transitionTime={5}>
						{selectPark.images.length
							? selectPark.images.map((image) => {
									return (
										<div className='carousel'>
											<img className='slide-img' src={`${image.url}`} />
											<p className='legend'>{image.title}</p>
										</div>
									);
							  })
							: 'No Images to Display'}
					</Carousel>

					<div className='detail-container'>
						<div className='park-container'>
							<div className='centered'>
								<h3 className='title'>{selectPark.parkName}</h3>
							</div>
							<div className='park-details'>
								<p>{selectPark.parkDetails}</p>
							</div>

							<div>
								{currentUser === [] ? (
									''
								) : (
									<div className='buttons'>
										<button onClick={setHiked} className='btn hiked'>
											HIKED 🥾
										</button>
										<button onClick={setWantToSee} className='btn see'>
											WANT TO SEE ⛰
										</button>
									</div>
								)}
							</div>
							<div className='acts'>
								{!selectPark.activities.length ? null : (
									<div className='act-main'>
										<h3>Activities:</h3>

										<div className='activities'>
											{selectPark.activities.map((act) => (
												<p className='activity-item'>{act.name}</p>
											))}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default ParkDetail;

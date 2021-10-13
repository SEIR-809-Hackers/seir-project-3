import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useToasts} from 'react-toast-notifications'

function ParkDetail({ parks, user }) {
	const { currentUser, updateParks } = useContext(DataContext);
	const id = useParams();
	const { addToast } = useToasts();

	let selectPark = parks.find((park) => {
		return id.id === park._id;
	});

	
	async function setWantToSee(event) {
		event.preventDefault();
		if (currentUser) {
			const userId = currentUser._id;
			let url = `https://fast-springs-20221.herokuapp.com/parks/wantToSee/${id.id}/users/${userId}`;
			try {
				const res = await fetch(url, {
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')
						)}`,
					},
				});
				if (res) {
					addToast('Added Park to your ParkPass!', {appearance: 'success',autoDismiss: true,autoDismissTimeout: 1500})
					updateParks(event)

				}
				;
			} catch (error) {
				addToast('Park Not Added! Unexpected Error Occurred.', {
					appearance: 'error',
					autoDismiss: true,
					autoDismissTimeout: 1500,
				});
			}
		}
	}

	if (selectPark === undefined) {
		return <h1>Pick A Park to Get Started!</h1>;
	}

	return (
		<div>

			<div className='container'>
				<Carousel
					showArrows={true}
					autoPlay={true}
					infiniteLoop={true}
					stopOnHover={true}
					transitionTime={5}
					width={'auto'}>
					{selectPark.images.length
						? selectPark.images.map((image) => {
								return (
									<div className='carousel'>
										<img alt={`${image.title}`} className='slide-img' src={`${image.url}`} />
										<p className='legend'>{image.title}</p>
									</div>
								);
						  })
						: 'No Images to Display'}
				</Carousel>

				<div className='detail-container'>
					<div className='park-container'>
						<div className='centered'>
							<h3 className='title heading'>{selectPark.parkName}</h3>
						</div>
						<div className='park-details'>
							<p>{selectPark.parkDetails}</p>
							<div className='park-location'>
								<p>📍 {selectPark.parkLocation}</p>
							</div>		
						</div>
						<div className='acts'>
							{!selectPark.activities.length ? (
								<div>
									<h3 className='heading'>Activities:</h3>
									<div className='activities'>
										<p className='activity-item'>No Activities Listed</p>
									</div>
								</div>
							) : (
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
						<div className='details-div'>
							{currentUser === undefined ? (
								''
							) : (
								<div className='buttons details-div'>
									<button onClick={setWantToSee} className='btn see'>
										Add to My ParkPass⛰
									</button>
									<h4 className='explorers'>{selectPark.users.length} Explorers</h4>
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

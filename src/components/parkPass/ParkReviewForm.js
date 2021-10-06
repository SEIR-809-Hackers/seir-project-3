import React from 'react';
import { useState } from 'react';

function ParkReviewForm({ review, setReview }) {

	function handleSubmit() {}

	function handleChangeTitle() {}
	function handleChangeBody() {}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>Title:</h3>
				<input type='text' onChange={handleChangeTitle}></input>
				<p>Body:</p>
				<input type='text' onChange={handleChangeBody}></input>

				<button type='submit'>
					<strong>SUBMIT</strong>
				</button>
			</form>
		</div>
	);
}

export default ParkReviewForm;

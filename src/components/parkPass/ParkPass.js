import React from 'react';
import ParkPassList from './ParkPassList';

function ParkPass({user,parks,reviews,setReview}) {
    return (
        <div>
            <h1>{user[0].name}</h1>
            <ParkPassList user={user} reviews={reviews} setReview={setReview}/>
        </div>
    );
}

export default ParkPass;
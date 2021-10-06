import React from 'react';
import {useParams} from 'react-router-dom'

function ParkDetail({parks}) {

    const {id} = useParams();

    let park = parks.find(() => {
        return id === parks._id
    })

    return (
        <div>
            <h1>{park.ParksName}</h1>
            <p>{park.ParkDetails}</p>
        </div>
    );
}

export default ParkDetail;
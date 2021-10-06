import React from 'react';
import {useParams} from 'react-router-dom'

function ParkDetail({parks}) {

    const {id} = useParams();

    let selectPark = parks.find((park) => {
        return id === park._id
    })

    return (
        <div>
            {/* <h1>{selectPark.ParksName}</h1>
            <p>{selectPark.ParkDetails}</p> */}
        </div>
    );
}

export default ParkDetail;
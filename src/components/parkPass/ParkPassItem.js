import React from 'react';

function ParkPassItem({user}) {

    let parks = user[0].myParks

    return (
        <div>
            {parks.map((park) => (
                <p>
                    {park}
                </p>
            ))}
        </div>
    );
}

export default ParkPassItem;
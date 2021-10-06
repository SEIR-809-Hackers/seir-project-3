import React from 'react';

function ParkItem({parks}) {
    return (
        <div>
           {parks.map((park) => (
               <h2>{park.ParksName}</h2>
           ))}
        </div>
    );
}

export default ParkItem;
import React from 'react';
import ParkPassList from './ParkPassList';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

function ParkPass({user}) {
    const { currentUser, setCurrentUser } = useContext(DataContext);


    useEffect(() => {
        	let login = await axios.get(`https://fast-springs-20221.herokuapp.com/users/getByUsername/${user.username}`)
			console.log(login.data)
			setCurrentUser(login.data)
    }, [])

    return (
        <div>
            <h1>Hello</h1>
            <h2>{currentUser.username}</h2>
            <ParkPassList />
        </div>
    );
}

export default ParkPass;
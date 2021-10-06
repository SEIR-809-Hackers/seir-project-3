import React from 'react';
import UserForm from './UserForm';

function User({user, setUser}) {

    return (
        <div className='user'>
            {user=false ? <UserForm setUser={setUser}/> :<h3>{user[0].name}</h3>}
        </div>
    );
}

export default User;
import React from 'react';
import {useState} from 'react';
import MainForm from '../styles/form';


function UserForm({user,setUser}) {
    [user, setUser] = useState({
        name: ''
    });

    function handleSubmit(event){
        event.preventDefault();

    }

    function handleChange(event){
        event.preventDefault();
        setUser({[event.target.id]:event.target.name})

    }

    return (
        <MainForm className='user-form'>
            <form onSubmit={handleSubmit}>
                <p>
                    <strong>
                        Username:
                    </strong>
                </p>
                <input type='text' id='name' onChange={handleChange}/>
                {/* add pass */}
                <button type='submit'>
                    <strong>LOGIN</strong>
                </button>
            </form>
        </MainForm>
    );
}

export default UserForm;
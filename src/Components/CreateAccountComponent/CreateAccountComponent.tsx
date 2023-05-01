import React, { useState } from 'react';

export default function CreateAccount() {
    const [username, setUsername] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        if (!username || !password) {
            alert("Count not create account");
        } else {
            let userData: object = {
                id: 0,
                username,
                isAdmin,
                password
            }
            // if (await {function name}userData)) {
            //   console.log('Success');
            //   navigate("/{home component}");
            // } else {
            //   alert("Count not create account");
            // }
            console.log(userData);
        }
    }

    return (
        <div>
            <h1>Create Account</h1>
            <input type='text' placeholder='Enter Username' onChange={({ target: { value } }) => setUsername(value)} />
            <div className='d-flex'>
                <p>Admin Account</p>
                <input type='checkbox' onClick={() => setIsAdmin(!isAdmin)} />
            </div>
            <input type='password' placeholder='Enter Password' onChange={({ target: { value } }) => setPassword(value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}
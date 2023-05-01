import React, { useState } from 'react';
import { GetCodeWarsAuthoredKatas } from '../../Services/DataService';

export default function TestGetCodeWarsUserAuthored() {
    const [username, setUsername] = useState<string>('');

    const handleSubmit = async () => {
        console.log(await GetCodeWarsAuthoredKatas(username));
    }

    return (
        <div>
            <h1>Get User Authored Katas</h1>
            <input type='text' placeholder='Enter Username' onChange={({target: { value }}) => setUsername(value)}/>
            <button onClick={handleSubmit}>Get User Authored Katas</button>
        </div>
    )
}
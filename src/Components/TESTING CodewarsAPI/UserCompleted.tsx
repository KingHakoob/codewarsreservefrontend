import React, { useState } from 'react';
import { GetCodeWarsCompletedKatas } from '../../Services/DataService';

export default function TestGetCodeWarsUserCompleted() {
    const [username, setUsername] = useState<string>('');

    const handleSubmit = async () => {
        console.log(await GetCodeWarsCompletedKatas(username));
    }

    return (
        <div>
            <h1>Get User Completed Katas</h1>
            <input type='text' placeholder='Enter Username' onChange={({target: { value }}) => setUsername(value)}/>
            <button onClick={handleSubmit}>Get User Completed Katas</button>
        </div>
    )
}
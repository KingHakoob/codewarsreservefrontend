import { AddReservation } from "../../Services/DataService";
import { useState } from "react";

export default function TESTINGAddRes () {
    const [kataName, setKataName] = useState<string>('');
    const [kataLang, setKataLang] = useState<string>('');
    const [userId, setUserId] = useState<number>(0);
    const [username, setUsername] = useState<string>('');
    const [assignedBy, setAssignedBy] = useState<string>('');

    const handleSubmit = async () => {
        let addReservation: object = {
            kataId: kataName.replaceAll(' ', '-').toLocaleLowerCase(),
            kataName,
            kataLang,
            userId,
            username,
            assignedBy,
            isLocked: true,
            isCompleted: false,
            isDeleted: false
        }
        console.log(addReservation);
        if(await AddReservation(addReservation)){
            console.log('Success');
        }
    }

    return (
        <>
            <input type='text' placeholder='Kata Name' onChange={({target: { value }}) => setKataName(value)}/>
            <input type='text' placeholder='Kata Lang' onChange={({target: { value }}) => setKataLang(value)}/>
            <input type='text' placeholder='User Id' onChange={({target: { value }}) => setUserId(Number(value))}/>
            <input type='text' placeholder='Username' onChange={({target: { value }}) => setUsername(value)}/>
            <input type='text' placeholder='Assigned By' onChange={({target: { value }}) => setAssignedBy(value)}/>
            <button onClick={handleSubmit}>Add Kata</button>
        </>
    );
}
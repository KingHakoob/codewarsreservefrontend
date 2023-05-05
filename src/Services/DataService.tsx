const codeWars = 'https://www.codewars.com/api/v1/';
const backendAPI = 'https://codewarsbackend.azurewebsites.net/';

// Code Wars API Fetches

async function GetCodeWarsUserData(username: string) {
    const result = await fetch(`${codeWars}users/${username}`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsCompletedKatas(username: string) {
    const result = await fetch(`${codeWars}users/${username}/code-challenges/completed`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsAuthoredKatas(username: string) {
    const result = await fetch(`${codeWars}users/${username}/code-challenges/authored`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsKata(input: string) {
    const result = await fetch(`${codeWars}code-challenges/${input}`);
    let data = await result.json();
    return data;
}

// Backend API Fetches

async function CreateAccountPost(createdUser: object) {
    const result = await fetch(`${backendAPI}User/AddUser`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    } else {
    }
    let data = await result.json();
    console.log(data);
    return data;
}

async function LoginPost(loginUser: object) {
    const result = await fetch(`${backendAPI}User/Login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if (!result.ok) {
        alert('Could Not Log In')
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

async function AddReservation(addedReservation: object) {
    const result = await fetch(`${backendAPI}Reservation/AddReservation`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(addedReservation)
    });
    if (!result.ok) {
        alert('Could Not Add Reservation')
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

async function GetUserData(username: string) {
    const result = await fetch(`${backendAPI}User/getisadmin/${username}`);
    let data = await result.json();
    return data;
}

export { GetCodeWarsUserData, GetCodeWarsCompletedKatas, GetCodeWarsAuthoredKatas, GetCodeWarsKata, CreateAccountPost, LoginPost, AddReservation, GetUserData }
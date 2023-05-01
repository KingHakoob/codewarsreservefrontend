// Code Wars API Fetches

async function GetCodeWarsUserData(username: string) {
    const result = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsCompleted(username: string) {
    const result = await fetch(`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed`);
    let data = await result.json();
    return data;
}

// Backend API Fetches

export { GetCodeWarsUserData, GetCodeWarsCompleted }
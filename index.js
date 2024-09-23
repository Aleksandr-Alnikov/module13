export const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (url) => {
    try {
        const response = await fetch(url);
        const users = await response.json();

        users.forEach(user => {
            console.log(user.name);
        });
    } catch (error) {
        console.error(error);
    }
}


await fetchUsers(API_URL);
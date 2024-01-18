import { User } from '../../domain/User';
import { headers, url } from '../headers';

export const createUser = async (user: User) => {
    const userWithJsonDatos = {
        ...user,
        datos : JSON.stringify(user.datos),
    };

    const response = await fetch(url, {
        method : 'POST',
        headers,
        body : JSON.stringify(userWithJsonDatos),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.json();
    return responseBody;
};
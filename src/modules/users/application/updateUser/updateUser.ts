import { User } from '../../domain/User';
import { headers, url } from '../headers';

export const updateUser = async (user: User) => {

    const userWithJsonDatos = {
        ...user,
        datos : JSON.stringify(user.datos),
    };

    const response = await fetch(`${url}/${user.id}`, {
        method : 'PUT',
        headers,
        body : JSON.stringify(userWithJsonDatos),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.json();
    return responseBody;
};
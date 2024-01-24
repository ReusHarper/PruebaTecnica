import { User } from '../../domain/User';
import { headers, url } from '../headers';

export const createUser = async (user: User, imagen ?: string) => {
    console.log('user: ', user)
    const newDatos = user.datos
    const newUser = user

    // newDatos.imagen = imagen !== null ? imagen : newDatos!.imagen
    newUser.datos = newDatos;

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
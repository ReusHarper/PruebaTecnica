/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { User } from '../../domain/User';
import { headers, url } from '../headers';

export const getUserAll = () : Array<User> => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(url, {
                method: 'GET',
                headers,
            });
            setUsers(await response.json() as User[]);
        };

        fetchUsers();
    }, []);

    return users;
};
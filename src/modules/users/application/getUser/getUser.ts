/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { User } from '../../domain/User';
import { getUserAll } from './getUserAll';

export const getUser = (userId: number): User | null => {
    const [user, setUser] = useState<User | null>(null);
    const allUsers = getUserAll();

    useEffect(() => {
        const filteredUser = allUsers.find((user) => user.id === userId);
        setUser(filteredUser || null);
    }, [allUsers, userId]);

    return user;
};
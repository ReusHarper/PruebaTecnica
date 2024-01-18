import { useState } from 'react';
import { UserContactData } from '../modules/users/domain/UserContactData';

type FormValues = {
    [key: string]: string | number | null | undefined | UserContactData;
};

type UseFormReturn = [
    FormValues,
    (event: React.ChangeEvent<HTMLInputElement>, key: string) => void,
    () => void
];

export const useForm = (initialValues: FormValues): UseFormReturn => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setValues({
            ...values,
            [key]: event.target.value,
        });
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return [values, handleChange, resetForm];
};
/* eslint-disable react-hooks/rules-of-hooks */
import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { UserNotValidError } from '../../../modules/users/domain/User';
import { DataNotValidError } from '../../../modules/users/domain/UserContactData';

interface FieldFormProps {
    id           : string;
    label        : string;
    placeholder  : string;
    warning      : string;
    type         : string;
    value       ?: string | number | null;
    handleChange : (event : ChangeEvent<HTMLInputElement>, type : string ) => void;
}

const FieldForm =  ({ id, label, placeholder, warning, type, value, handleChange } : FieldFormProps) => {

    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid]       = useState(true);

    const handleLocalChange = (event : ChangeEvent<HTMLInputElement>, type : string ) => {
        setInputValue(event.target.value);
        setIsValid(UserNotValidError(event.target.value, type) || DataNotValidError(event.target.value, type));
        handleChange(event, type);
    };

    return (
        <Form.Group className = 'mb-3' controlId = { id }>
            <Form.Label>{ label }</Form.Label>
            <Form.Control 
                type        = { type }
                placeholder = { placeholder }
                value       = { inputValue || value || '' }
                onChange    = { (e : ChangeEvent<HTMLInputElement>) => handleLocalChange(e, type) }
                isInvalid   = { !isValid }
                max         = { type === 'date' ? new Date().toISOString().split('T')[0]: undefined }
            />
            {
                isValid ? null : <Form.Control.Feedback type = 'invalid'>{ warning }</Form.Control.Feedback>
            }
        </Form.Group>
    );
}

export default FieldForm;
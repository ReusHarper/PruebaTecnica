import { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';

interface ToastAlertProps {
    title : string;
    body  : string;
}

const ToastAlert = ({ title, body } : ToastAlertProps) => {

    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowToast(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Toast show = {showToast} onClose = { () => setShowToast(false) }>
            <Toast.Header>
                <strong className = 'me-auto'>{ title }</strong>
            </Toast.Header>
            <Toast.Body>{ body }</Toast.Body>
        </Toast>
    );
}

export default ToastAlert;
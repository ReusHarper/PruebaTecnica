import { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserForm, UserFormField } from '../../modules/users/domain/UserForm';
import { getUserAll } from '../../modules/users/application/getUser/getUserAll';
// import { getUser } from '../../modules/users/application/getUser/getUser';
import Table from 'react-bootstrap/Table';
import { Form, InputGroup } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import './assets/UsersDashboard.css';

const UsersDashboard = () => {

    // ***** Search ***** //
    const [search, setSearch] = useState('');
    
    // ***** Constants & Variables ***** //
    const users = getUserAll();
    
    // ***** Functions ***** //
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    // ***** JSX ***** //
    return (
        <div className = 'py-5'>
            <h1 className = 'text-primary text-center pb-3'>Información de los Usuarios</h1>
            <div className = 'd-flex justify-content-center px-4'>
                <Form className = 'd-block max-width-50rem'>
                    <InputGroup className = 'mb-3'>
                        <Form.Control type = 'text' placeholder = 'Buscar usuario' onChange = { handleSearch }/>
                    </InputGroup>
                </Form>
            </div>
            <div className = 'px-4 scroll-container'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>{ UserForm.Labels[UserFormField.NOMBRE] }</th>
                            <th>{ UserForm.Labels[UserFormField.AP_PATERNO] }</th>
                            <th>{ UserForm.Labels[UserFormField.AP_MATERNO] }</th>
                            <th>{ UserForm.Labels[UserFormField.EDAD] }</th>
                            <th>{ UserForm.Labels[UserFormField.EMAIL] }</th>
                            <th>{ UserForm.Labels[UserFormField.FEC_NAC] }</th>
                            <th>{ 'Datos' }</th>
                            <th>{ 'Editar' }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users
                            .filter(user => user?.nombre?.toLowerCase().includes(search.toLowerCase()))
                            .map((user, index) => (
                                <tr key = { index }>
                                    <td>{ user.nombre }</td>
                                    <td>{ user.apellidoPaterno }</td>
                                    <td>{ user.apellidoMaterno }</td>
                                    <td>{ user.edad }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.fechaNac }</td>
                                    <td className = 'max-width-5rem'>{ user.datos !== null ? JSON.stringify(user.datos) : '' }</td>
                                    <td>
                                        <NavLink to = { `/user-edit/${ user.id }` } className = 'd-flex justify-content-center'>
                                            <FaEdit />
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UsersDashboard;
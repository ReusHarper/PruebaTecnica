/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserForm, UserFormButton, UserFormField } from '../../modules/users/domain/UserForm';
import { UserContactDataForm, UserContactDataFormField } from '../../modules/users/domain/UserContactDataForm';
import { UserContactData } from '../../modules/users/domain/UserContactData';
import { User } from '../../modules/users/domain/User';
import { getUser } from '../../modules/users/application/getUser/getUser';
import { createUser } from '../../modules/users/application/createUser/createUser';
import { useForm } from '../../hooks/useForm';
import { useResetForm } from '../../hooks/useResetForm';
import FieldForm from './components/FieldForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Camera from '../../components/Camera/Camera';
import ToastAlert from '../../components/ToasAlert/ToastAlert';
import './assets/Users.css';
import { updateUser } from '../../modules/users/application/updateUser/updateUser';

const Users = () => {
    // ***** Constants & Variables ***** //
    const { id }       = useParams<{ id: string }>();
    const userSelected = id !== null ? getUser(parseInt(id!)) : null;
    const navigate     = useNavigate();

    // ***** States ***** //
    const [allInputsFilled, setAllInputsFilled] = useState(false);
    const [errorResponse, setErrorResponse]     = useState(false);
    const [photoBase64, setPhotoBase64]         = useState('');

    const [formUserContactDataValues, setFormUserContactDataValues] = useState<UserContactData>({
        calle        : userSelected?.datos?.calle || '',
        numero       : userSelected?.datos?.numero || '',
        colonia      : userSelected?.datos?.colonia || '',
        delegacion   : userSelected?.datos?.delegacion || '',
        estado       : userSelected?.datos?.estado || '',
        imagen       : userSelected?.datos?.imagen || '',
        cp           : userSelected?.datos?.cp || '',
        codigoPostal :  userSelected?.datos?.codigoPostal || 0,
    });
    const [formUserValues, setFormUserValues] = useState<User>({
        nombre          : userSelected?.nombre || '',
        apellidoPaterno : userSelected?.apellidoPaterno || '',
        apellidoMaterno : userSelected?.apellidoMaterno || '',
        edad            : userSelected?.edad || 0,
        email           : userSelected?.email || '',
        fechaNac        : userSelected?.fechaNac || '',
        datos           : formUserContactDataValues,
    });

    // Arrays corresponding to the fields of the forms
    const userFormFields             = Object.entries(UserForm.Labels);
    const userContactDataFormFields  = Object.entries(UserContactDataForm.Labels);

    // ***** Hooks ***** //
    const [formValuesResponse, handleChange] = useForm({ ...formUserContactDataValues, ...formUserValues });

    // ***** Effects ***** //
    useEffect(() => {
        if (userSelected) {
            const {
                datos: userContactData,
                ...userValuesWithoutDatos
            } = userSelected;

            if (userContactData) {
                if (photoBase64 !== '') { userContactData.imagen = photoBase64; }
                setFormUserContactDataValues(userContactData);
            }

            if (userValuesWithoutDatos) {
                setFormUserValues({ ...userValuesWithoutDatos, datos: userContactData });
            }
        }
    }, [userSelected]);

    useEffect(() => {
        // const { calle, numero, colonia, delegacion, estado, imagen, cp, codigoPostal, ...userValues } = formValuesResponse;
        const { nombre, apellidoPaterno, apellidoMaterno, edad, email, fechaNac, calle, numero, colonia, delegacion, estado, imagen, cp, codigoPostal } = formValuesResponse;
        const userContactDataValues: UserContactData = {
            calle        : typeof calle        === 'string' ? calle          : '',
            numero       : typeof numero       === 'string' ? numero         : '',
            colonia      : typeof colonia      === 'string' ? colonia        : '',
            delegacion   : typeof delegacion   === 'string' ? delegacion     : '',
            estado       : typeof estado       === 'string' ? estado         : '',
            imagen       : typeof imagen       === 'string' ? imagen         : '',
            cp           : typeof cp           === 'string' ? cp             : '',
            codigoPostal : typeof codigoPostal === 'number' ? codigoPostal   : 0,
        };

        const userValues: User = {
            nombre          : typeof nombre          === 'string' ? nombre          : '',
            apellidoPaterno : typeof apellidoPaterno === 'string' ? apellidoPaterno : '',
            apellidoMaterno : typeof apellidoMaterno === 'string' ? apellidoMaterno : '',
            edad            : typeof edad            === 'number' ? edad            : 0,
            email           : typeof email           === 'string' ? email           : '',
            fechaNac        : typeof fechaNac        === 'string' ? fechaNac        : '',
            datos           : { ...userContactDataValues }
        };

        if (photoBase64 !== '') { userContactDataValues.imagen = photoBase64; }
        userContactDataValues.codigoPostal = Number(userContactDataValues.cp);

        setFormUserContactDataValues(userContactDataValues);
        setFormUserValues(userValues);
    }, [formValuesResponse]);

    useEffect(() => {
        if (photoBase64 !== '') { 
            setFormUserContactDataValues(prevState => ({ ...prevState, imagen: photoBase64 }));
        }
    }, [photoBase64]);

    useEffect(() => {
        const filled = Object.values(formUserContactDataValues).every(value => value !== null && value !== '') && Object.values(formUserValues).every(value => value !== null && value !== '');
        setAllInputsFilled(filled);
    }, [userSelected, formUserContactDataValues, formUserValues, photoBase64]);

    // ***** Functions ***** //
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            if (!allInputsFilled) return;
            let response;

            if (userSelected) {
                response = await updateUser(formUserValues);
            } else {
                response = await createUser(formUserValues);
            }

            if (response.error) {
                throw new Error(response.error);
            }

            navigate('/users-dashboard');
        } catch (error) {
            console.error(error);
            setErrorResponse(true);
        }
    };

    // ***** JSX ***** //
    return (
        <div className = 'd-flex p-5 justify-content-center align-items-start'>
            <Form key = { `formUser` } id = 'formUser' className = 'w-100'>
                <h1 className = 'text-primary text-center pb-5'>Datos de Usuario</h1>
                {/***** Camera *****/}
                <div className = 'row'>
                    <div className = 'col-12 mb-3'>
                        <Camera setPhotoBase64 = { setPhotoBase64 }/>
                    </div>
                </div>

                {/***** UserData *****/}
                <div className = 'row'>
                {
                    userFormFields.map(([key, value]) => {
                        return (
                            <div key = { `formUser-${ key }` } className = 'col-md-6 col-lg-4 mb-3'>
                                <FieldForm
                                    id           = { `formUser-${ UserFormField }-${ key }` }
                                    label        = { value }
                                    placeholder  = { UserForm.Placeholders[key as UserFormField] }
                                    warning      = { UserForm.Warning[key as UserFormField] }
                                    type         = { UserForm.Type[key as UserFormField] }
                                    handleChange = { (event) => handleChange(event, key) }
                                    value        = { userSelected ? userSelected[key as UserFormField] : undefined }
                                />
                            </div>
                        );
                    })
                }
                </div>
                {/***** UserContactData *****/}
                <div className = 'row'>
                {
                    userContactDataFormFields.map(([key, value]) => {
                        return (
                            <div key = { `formUserDataContact-${ key }` } className = 'col-md-6 col-lg-4 mb-3'>
                                <FieldForm
                                    id           = { `formUserContactData-${ UserContactDataFormField }-${key}` }
                                    label        = { value }
                                    placeholder  = { UserContactDataForm.Placeholders[key as UserContactDataFormField] }
                                    warning      = { UserContactDataForm.Warning[key as UserContactDataFormField] }
                                    type         = { UserContactDataForm.Type[key as UserContactDataFormField] }
                                    handleChange = { (event) => handleChange(event, key) }
                                    value        = { userSelected && userSelected.datos ? userSelected.datos[key as UserContactDataFormField] : undefined }
                                />
                            </div>
                        );
                    })
                }
                </div>
                {/***** Buttons *****/}
                <div className = 'row mt-3'>
                    <div className = 'col-sm-12 col-md-6 mb-3'>
                        <Button 
                            className = 'w-100 border bg-color-hover bg-color-secondary'
                            variant   = 'secundary'
                            type      = 'submit'
                            onClick   = { (e : React.MouseEvent) => useResetForm(e) }
                        >
                            { UserFormButton.Labels.RESTART }
                        </Button>
                    </div>
                    <div className = 'col-sm-12 col-md-6 mb-3'>
                        <Button 
                            className = {`w-100 ${ allInputsFilled ? 'bg-color-primary cursor-pointer' : 'bg-secondary cursor-default' }`}
                            variant   = 'primary'
                            type      = 'submit'
                            disabled  = { !allInputsFilled }
                            onClick   = { handleSubmit }
                        >
                            { UserFormButton.Labels.SUBMIT }
                        </Button>
                    </div>
                </div>
                {/***** Toast message  *****/}
                {
                    errorResponse && (
                        <ToastAlert 
                            title = {'Error al enviar la información del usuario'}
                            body  = {'Es posible que exista un error en el servidor, intente de nuevo más tarde.'}
                        />
                    )
                }
            </Form>
        </div>
    );
}

export default Users;
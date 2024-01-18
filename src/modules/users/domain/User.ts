import { UserContactData } from "./UserContactData";

export interface User {
    nombre           : string | null;
    apellidoPaterno  : string | null;
    apellidoMaterno  : string | null;
    edad             : number | null;
    email            : string | null;
    fechaNac         : string | null;
    datos            : UserContactData | null;
    id              ?: number;
}

const regexUser = {
    expression: {
        nombre          : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
        apellidoPaterno : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
        apellidoMaterno : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
        edad            : /^[0-9]+$/,
        email           : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        fechaNac        : /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    } as const,
    type: {
        nombre          : 'string',
        apellidoPaterno : 'string',
        apellidoMaterno : 'string',
        edad            : 'number',
        email           : 'email',
        fechaNac        : 'date',
    } as const,
} as const;

export const UserNotValidError = (value : string, type : string) => {
    switch (type) {
        case regexUser.type.email:
            return regexUser.expression.email.test(value);
        case regexUser.type.nombre:
            return regexUser.expression.nombre.test(value);
        case regexUser.type.apellidoPaterno:
            return regexUser.expression.apellidoPaterno.test(value);
        case regexUser.type.apellidoMaterno:
            return regexUser.expression.apellidoMaterno.test(value);
        case regexUser.type.fechaNac:
            return true;
        default:
            return false;
    }
}
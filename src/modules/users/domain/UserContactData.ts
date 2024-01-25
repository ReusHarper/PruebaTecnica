export interface UserContactData {
    calle         : string;
    numero        : string;
    colonia       : string;
    delegacion    : string;
    estado        : string;
    imagen        : string;
    cp           ?: string;
    codigoPostal ?: number;
}

const regexUserContactData = {
    expression: {
        calle        : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ][a-zA-Z0-9áéíóúüÁÉÍÓÚÜñÑ\s]*$/,
        numero       : /^[0-9]+$/,
        colonia      : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
        delegacion   : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
        estado       : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
        codigoPostal : /^[0-9]+$/,
    } as const,
    type: {
        calle        : 'string',
        numero       : 'number',
        colonia      : 'string',
        delegacion   : 'string',
        estado       : 'string',
        codigoPostal : 'number',
    } as const,
    name: {
        calle        : 'calle',
        numero       : 'numero',
        colonia      : 'colonia',
        delegacion   : 'delegacion',
        estado       : 'estado',
        codigoPostal : 'codigoPostal',
    } as const,
} as const;

export const DataNotValidError = (value : string, name : string) => {
    switch (name) {
        case regexUserContactData.name.calle:
            return regexUserContactData.expression.calle.test(value);
        case regexUserContactData.name.numero:
            return regexUserContactData.expression.numero.test(value);
        case regexUserContactData.name.colonia:
            return regexUserContactData.expression.colonia.test(value);
        case regexUserContactData.name.delegacion:
            return regexUserContactData.expression.delegacion.test(value);
        case regexUserContactData.name.estado:
            return regexUserContactData.expression.estado.test(value);
        case regexUserContactData.name.codigoPostal:
            return regexUserContactData.expression.codigoPostal.test(value);
        default:
            return false;
    }
}
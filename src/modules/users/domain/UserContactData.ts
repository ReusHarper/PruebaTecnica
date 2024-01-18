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
        calle        : /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/,
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
} as const;

export const DataNotValidError = (value : string, type : string) => {
    switch (type) {
        case regexUserContactData.type.calle:
            return regexUserContactData.expression.calle.test(value);
        case regexUserContactData.type.numero:
            return regexUserContactData.expression.numero.test(value);
        case regexUserContactData.type.colonia:
            return regexUserContactData.expression.colonia.test(value);
        case regexUserContactData.type.delegacion:
            return regexUserContactData.expression.delegacion.test(value);
        case regexUserContactData.type.estado:
            return regexUserContactData.expression.estado.test(value);
        case regexUserContactData.type.codigoPostal:
            return regexUserContactData.expression.codigoPostal.test(value);
        default:
            return false;
    }
}
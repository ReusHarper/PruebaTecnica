export enum UserFormField {
    NOMBRE     = 'nombre',
    AP_PATERNO = 'apellidoPaterno',
    AP_MATERNO = 'apellidoMaterno',
    EDAD       = 'edad',
    EMAIL      = 'email',
    FEC_NAC    = 'fechaNac',
}

export const UserForm = {
    Labels: {
        [UserFormField.NOMBRE]     : 'Nombre(s):',
        [UserFormField.AP_PATERNO] : 'Apellido paterno:',
        [UserFormField.AP_MATERNO] : 'Apellido materno:',
        [UserFormField.EDAD]       : 'Edad:',
        [UserFormField.EMAIL]      : 'Email:',
        [UserFormField.FEC_NAC]    : 'Fecha de nacimiento:',
    } as const,

    Placeholders: {
        [UserFormField.NOMBRE]     : 'Arturo',
        [UserFormField.AP_PATERNO] : 'Espinosa',
        [UserFormField.AP_MATERNO] : 'Guadarrama',
        [UserFormField.EDAD]       : '24',
        [UserFormField.EMAIL]      : 'arthurespgua@outlook.com',
        [UserFormField.FEC_NAC]    : '22/11/1999',
    } as const,

    Warning: {
        [UserFormField.NOMBRE]     : 'El nombre es obligatorio y debe estar conformado únicamente por letras (Ej: Juan)',
        [UserFormField.AP_PATERNO] : 'El apellido paterno es obligatorio y debe estar conformado únicamente por letras (Ej: Pérez)',
        [UserFormField.AP_MATERNO] : 'El apellido materno es obligatorio y debe estar conformado únicamente por letras (Ej: López)',
        [UserFormField.EDAD]       : 'La edad es obligatoria y debe estar conformada únicamente por números (Ej: 24)',
        [UserFormField.EMAIL]      : 'El email debe contar con un formato válido (Ej: user@domain.com)',
        [UserFormField.FEC_NAC]    : 'La fecha de nacimiento debe ser una fecha válida (Ej: 01/01/2000)',
    } as const,

    Type: {
        [UserFormField.NOMBRE]     : 'string',
        [UserFormField.AP_PATERNO] : 'string',
        [UserFormField.AP_MATERNO] : 'string',
        [UserFormField.EDAD]       : 'number',
        [UserFormField.EMAIL]      : 'email',
        [UserFormField.FEC_NAC]    : 'date',
    } as const,

    Name: {
        [UserFormField.NOMBRE]     : 'nombre',
        [UserFormField.AP_PATERNO] : 'apellidoPaterno',
        [UserFormField.AP_MATERNO] : 'apellidoMaterno',
        [UserFormField.EDAD]       : 'edad',
        [UserFormField.EMAIL]      : 'email',
        [UserFormField.FEC_NAC]    : 'fechaNac',
    } as const,
} as const;

export const UserFormButton = {
    Labels : {
        SUBMIT  : 'Enviar',
        RESTART : 'Reiniciar',
    } as const
} as const;
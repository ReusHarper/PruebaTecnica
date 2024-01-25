export enum UserContactDataFormField {
    CALLE      = 'calle',
    NUMERO     = 'numero',
    COLONIA    = 'colonia',
    DELEGACION = 'delegacion',
    ESTADO     = 'estado',
    CP         = 'cp',
}

export const UserContactDataForm = {
    Labels: {
        [UserContactDataFormField.CALLE]      : 'Calle:',
        [UserContactDataFormField.NUMERO]     : 'Número:',
        [UserContactDataFormField.COLONIA]    : 'Colonia:',
        [UserContactDataFormField.DELEGACION] : 'Delegación o Municipio:',
        [UserContactDataFormField.ESTADO]     : 'Estado:',
        [UserContactDataFormField.CP]         : 'CP:',
    } as const,

    Placeholders: {
        [UserContactDataFormField.CALLE]      : 'Plaza el Carmen Paseo San Carlos',
        [UserContactDataFormField.NUMERO]     : '15',
        [UserContactDataFormField.COLONIA]    : 'Francisco Sarabia',
        [UserContactDataFormField.DELEGACION] : 'Nicolás Romero',
        [UserContactDataFormField.ESTADO]     : 'Estado de México',
        [UserContactDataFormField.CP]         : '54473',
    } as const,

    Warning: {
        [UserContactDataFormField.CALLE]      : 'La calle es obligatoria y debe estar conformada únicamente por letras (Ej: Av. Insurgentes)',
        [UserContactDataFormField.NUMERO]     : 'El número es obligatorio y debe estar conformado únicamente por números (Ej: 1234)',
        [UserContactDataFormField.COLONIA]    : 'La colonia es obligatoria y debe estar conformada únicamente por letras (Ej: Del Valle)',
        [UserContactDataFormField.DELEGACION] : 'La delegación es obligatoria y debe estar conformada únicamente por letras (Ej: Benito Juárez)',
        [UserContactDataFormField.ESTADO]     : 'El estado es obligatorio y debe estar conformado únicamente por letras (Ej: Ciudad de México)',
        [UserContactDataFormField.CP]         : 'El código postal es obligatorio y debe estar conformado únicamente por números (Ej: 03100)',
    } as const,

    Type: {
        [UserContactDataFormField.CALLE]      : 'string',
        [UserContactDataFormField.NUMERO]     : 'number',
        [UserContactDataFormField.COLONIA]    : 'string',
        [UserContactDataFormField.DELEGACION] : 'string',
        [UserContactDataFormField.ESTADO]     : 'string',
        [UserContactDataFormField.CP]         : 'number',
    } as const,

    Name: {
        [UserContactDataFormField.CALLE]      : 'calle',
        [UserContactDataFormField.NUMERO]     : 'numero',
        [UserContactDataFormField.COLONIA]    : 'colonia',
        [UserContactDataFormField.DELEGACION] : 'delegacion',
        [UserContactDataFormField.ESTADO]     : 'estado',
        [UserContactDataFormField.CP]         : 'codigoPostal',
    } as const,
} as const;

import { setLocale } from 'yup';

setLocale({
    mixed: {
        default: 'Campo não é válido',
        required: 'O campo é obrigatório',
    },
    string: {
        email: () => 'O campo precisa conter um email válido',
        max: ({ max }) => `O campo pode ter no máximo ${max} caracteres`,
        min: ({ min }) => `O campo precisa ter pelo menos ${min} caracteres`,
        length: ({ length }) => `O campo precisa ter exatamente ${length} caracteres`,
    },
    boolean: {},
    object: {},
    array: {},
});
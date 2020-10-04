import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .required('Required'),
    release_date: Yup.string()
        .max(10, 'Must be 8 characters')
        .required('Required'),
    genres: Yup.string()
        .max(100, 'Must be 8 characters')
        .required('Required'),
    poster_path: Yup.string().url().required('Wrong URL'),
    overview: Yup.string()
        .max(500, 'Must be 15 characters or less')
        .required('Required'),
    runtime: Yup.number()
        .positive()
        .integer()
        .required('Required'),
});

export { validationSchema };
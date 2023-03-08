import * as yup from 'yup';



export const signUpValidationSchema = yup.object({
	user_name: yup
		.string()
		.required('Your username is required')
		.matches(/^[-\w.$@*!]{1,30}$/, "username mustn't contains any spaces"),
	email: yup
		.string()
		.email('please enter a valid email')
		.required('Your email is required'),
	password: yup
		.string()
		.required('Your password is required')
		.min(8, 'Your password is too short.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		),
	password_confirmation: yup
		.string()
		.required('Password confirmation is required')
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	first_name: yup.string().required('Your first name is required'),
	last_name: yup.string().required('Your last name is required'),
	phone: yup.string(),
	age: yup.string(),
	gender: yup.string(),
});


export const updateUserValidationSchema = yup.object({
	user_name: yup
		.string()
		.required('please your username is required')
		.matches(/^[-\w.$@*!]{1,30}$/, "username mustn't contains any spaces"),
	email: yup
		.string()
		.email('please enter a valid email')
		.required('please your email is required'),
	first_name: yup.string().required('please your first name is required'),
	last_name: yup.string().required('please your last name is required'),
	phone: yup.string(),
	age: yup.string(),
	gender: yup.string().nullable(true),
});

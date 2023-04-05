import * as yup from 'yup';

function checkImageSize(files) {
	let valid = true;
	if (files) {
		files.forEach((file) => {
			const size = file.size / 1024 / 1024;
			if (size > 10) {
				// 10 MB
				valid = false;
			}
		});
	}
	return valid;
}

function checkImageType(files) {
	let valid = true;
	if (files) {
		files.forEach((file) => {
			if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
				valid = false;
			}
		});
	}
	return valid;
}

const updateProfileValidationSchema = yup.object({
	bio: yup.string().required('please your Bio is required'),
	cover: yup
		.object()
		.shape({
			files: yup
				.array()
				.nullable()
				.required('VALIDATION_FIELD_REQUIRED')
				.test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', checkImageSize)
				.test(
					'is-big-file',
					'VALIDATION_FIELD_FILE_WRONG_TYPE',
					checkImageType
				),
		})
		.required('please your last name is required'),
});

const updateUserValidationSchema = yup.object({
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
	age: yup.number(),
	gender: yup.string().nullable(true),
	birthday: yup.date(),
	country: yup.string(),
	region: yup.string(),
	status: yup.string(),
	current_password: yup
		.string()
		.min(8, 'Password is too short - should be 8 chars minimum.'),
	new_password: yup
		.string()
		.min(8, 'Password is too short - should be 8 chars minimum.'),
});

export { updateProfileValidationSchema, updateUserValidationSchema };

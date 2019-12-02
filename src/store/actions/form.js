import { HANDLE_INPUT_CHANGE, SUBMIT_FORM, SUBMITTING } from '../types';

export const handleInputChange = (event, index) => ({
	type: HANDLE_INPUT_CHANGE,
	payload: {
		event,
		index
	}
});

export const submit = (event) => ({
	type: SUBMIT_FORM,
	payload: event
});

export const submitting = () => ({
	type: SUBMITTING
});

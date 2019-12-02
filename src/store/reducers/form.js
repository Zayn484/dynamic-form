import { HANDLE_INPUT_CHANGE, SUBMIT_FORM, SUBMITTING } from '../types';
import validator from 'validator';

const initialState = {
	submitting: false,
	submit: false,
	form: [
		{
			id: 'name',
			label: 'Name',
			value: '',
			type: 'text',
			validation: [
				{
					exp: /\w/g,
					msg: 'This is a required field'
				}
			]
		},
		{
			id: 'dob',
			label: 'Date of Birth',
			value: '',
			type: 'date',
			validation: [
				{
					exp: /\d/g,
					msg: 'This is a required field'
				}
			]
		},
		{
			id: 'country',
			label: 'Country',
			value: '',
			type: 'dropdown',
			list: [ 'Canada', 'USA', 'Germany' ]
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HANDLE_INPUT_CHANGE:
			action.payload.event.persist();
			const updatedForm = state.form;

			updatedForm[action.payload.index] = {
				...updatedForm[action.payload.index],
				value: action.payload.event.target.value
			};

			return {
				...state,
				form: updatedForm
			};

		case SUBMITTING:
			return {
				...state,
				submitting: true
			};

		case SUBMIT_FORM:
			// Validating fields
			const form = state.form;
			let errorCount = 0;

			for (let el of form) {
				if (validator.isEmpty(el.value)) {
					el.error = true;
					errorCount += 1;
				} else if (el.type !== 'date' && !validator.isAlpha(el.value)) {
					el.error = true;
					el['validation'][0]['msg'] = 'Invalid input.';
					errorCount += 1;
				} else {
					delete el.error;
					errorCount -= 1;
				}
			}

			return {
				...state,
				form: form,
				submitting: false,
				submit: errorCount > 0 ? false : true
			};

		default:
			return state;
	}
}

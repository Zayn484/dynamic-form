import React from 'react';
import { connect } from 'react-redux';
import { handleInputChange, submit, submitting } from '../../store/actions/form';
import TextField from '../common/TextField';
import Select from '../common/Select';
import Alert from '../common/Alert';

import './Form.css';

const Form = ({ form, handleInputChange, submit, submitting }) => {
	let content = null;

	content = form.form.map((el, index) => {
		if (el.type === 'dropdown') {
			return (
				<Select key={el.id} label={el.label} options={el.list} onChange={(e) => handleInputChange(e, index)} />
			);
		} else {
			return (
				<TextField
					key={el.id}
					type={el.type}
					value={el.value}
					id={el.id}
					label={el.label}
					placeholder={`Enter your ${el.label}`}
					error={el.error || ''}
					helperMsg={el.validation}
					onChange={(e) => handleInputChange(e, index)}
				/>
			);
		}
	});

	const submitForm = (e) => {
		e.preventDefault();

		submitting();

		setTimeout(() => {
			submit();
		}, 1000);
	};

	return (
		<div className="form-wrapper w-75 mx-auto">
			{form.submit && <Alert role="success" msg="Your form has been submitted!" />}
			<form className="my-5 border p-4 " onSubmit={submitForm}>
				{content}
				<div className="text-center">
					<button type="submit" className="btn btn-primary" disabled={form.submitting}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	form: state.form
});

export default connect(mapStateToProps, { handleInputChange, submit, submitting })(Form);

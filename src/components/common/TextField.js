import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ value, id, type, label, placeholder, required, error, helperMsg, onChange }) => (
	<div className="form-group">
		<label htmlFor={id}>{label}</label>
		<input
			required={required}
			type={type}
			className="form-control"
			name={id}
			id={id}
			value={value}
			aria-describedby={label}
			placeholder={placeholder}
			onChange={onChange}
		/>
		{error && <small className="text-danger">{helperMsg[0].msg}</small>}
	</div>
);

TextField.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

TextField.defaultProps = {
	type: 'text'
};

export default TextField;

import React from 'react';

const Select = ({ value, id, label, options, onChange }) => (
	<div className="form-group">
		<label htmlFor={id}>{label}</label>
		<select className="custom-select" value={value} onChange={onChange}>
			{options &&
				options.map((op, index) => (
					<option key={index} value={op}>
						{op}
					</option>
				))}
		</select>
	</div>
);

export default Select;

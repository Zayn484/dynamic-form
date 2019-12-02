import React from 'react';

export default ({ role, msg }) => (
	<div className={`alert alert-${role} my-4`} role="alert">
		{msg}
	</div>
);

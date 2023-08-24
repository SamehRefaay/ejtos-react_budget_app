import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { isFocusable } from '@testing-library/user-event/dist/utils';

const Currency = () => {
	const { dispatch } = useContext(AppContext);

	const handleCurrencyChange = currentCurrency => {
		console.log(currentCurrency);
		dispatch({
			type: 'CHG_CURRENCY',
			payload: currentCurrency,
		});
	};

	return (
		<div
			className="alert alert-secondary"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				background: 'lightgreen',
			}}
		>
			{/* <span>Currency</span> ( */}
			<label htmlFor="currency">Currency</label>
			<select
				color="white"
				id="currency"
				style={{
					width: '100%',
					outline: 'none',
					border: 'none',
					fontSize: '18px',
					background: 'lightgreen',
				}}
				onChange={event => handleCurrencyChange(event.target.value)}
			>
				<option value="$">$ Dollar</option>
				<option value="£">£ Pound</option>
				<option value="€">€ Euro</option>
				<option value="₹">₹ Ruppee</option>
			</select>
		</div>
	);
};

export default Currency;

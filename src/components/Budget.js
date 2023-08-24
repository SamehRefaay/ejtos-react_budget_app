import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
	const { budget, currency, dispatch, expenses } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const handleSetBudget = val => {
		if (val >= totalExpenses) {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			});
		} else {
			alert(`You cannot reduce the budget value lower than the spending`);
		}
	};

	return (
		<div className="alert alert-secondary ">
			<span>Budget: {currency}</span>
			<input
				required
				type="number"
				id="budget"
				value={budget}
				step={10}
				onChange={event => handleSetBudget(event.target.value)}
				style={{ width: '100px', marginLeft: '1rem' }}
			/>
		</div>
	);
};
export default Budget;

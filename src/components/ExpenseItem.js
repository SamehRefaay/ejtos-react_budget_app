import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';

const ExpenseItem = props => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = name => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	return (
		<tr>
			<td>{props.name}</td>
			<td>£{props.cost}</td>
			<td>
				<PlusCircleFill
					cursor="pointer"
					color="green"
					fontSize={30}
					fontWeight="bold"
					onClick={event => increaseAllocation(props.name)}
				></PlusCircleFill>
			</td>
			<td>
				<DashCircleFill
					cursor="pointer"
					color="red"
					fontSize={30}
					fontWeight="bold"
					onClick={event => increaseAllocation(props.name)}
				></DashCircleFill>
			</td>
			<td>
				<TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
			</td>
		</tr>
	);
};

export default ExpenseItem;

'use client'
import styles from '../expenses.module.css'
import { addItem } from '../config/commands'
export default function AddExpense({ expenses, setExpenses }) {

	function onSubmit(e) {
		e.preventDefault();
		const name = e.target.name.value;
		let cost = e.target.cost.value;
		if (isNaN(cost)) {
			cost = 0;
		}
		let id = 0;
		addItem(name, cost);

	}


	return (
		<div id={styles.addExpense}>
			<h2>Добавить траты</h2>
			<form onSubmit={onSubmit}>
				<label>Название:</label>
				<input name='name' type='text'></input>
				<label>Цена:</label>
				<input name='cost' type='text'></input>
				<button>Подтвердить</button>
			</form>
		</div>
	)
}
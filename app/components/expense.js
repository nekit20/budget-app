'use client'
import styles from '../expenses.module.css'
import { deleteItem } from '../config/commands'
export default function Expense({ name, cost, expenses, setExpenses, id }) {

	function onClick() {
		deleteItem(id);
		/*
		setExpenses(expenses.filter(item => item.id != id));
		*/
	}

	return (
		<div className={styles.expense}>
			<p>{name}</p>
			<div>
				<span>{cost}₽</span>
			</div>
			<button onClick={onClick}>X</button>
		</div>
	)
}
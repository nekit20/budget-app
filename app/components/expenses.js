'use client'
import styles from '../expenses.module.css'
import Expense from './expense'

export default function Expenses({ search, setSearch, expenses, setExpenses }) {
	function onChange(e) {
		setSearch(expenses.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
	}

	return (
		<div id={styles.expenses}>
			<h2>Затраты</h2>
			<input onChange={onChange} type="text" placeholder='Введите для поиска...'></input>
			<div id={styles.expensesList}>
				{search.map(item => <Expense expenses={expenses} id={item.id} setExpenses={setExpenses} key={item.id} cost={item.cost} name={item.name}></Expense>)}
			</div>
		</div>
	)
}
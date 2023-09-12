'use client'
import { useState } from 'react'
import styles from '../budget.module.css'

export default function Budget({ budget, spent, remaining, setBudget }) {
	const [isEdit, setIsEdit] = useState(false);
	const [input, setInput] = useState(budget);
	function onClick(e) {
		if (isEdit) {
			setBudget(input);
			e.target.innerText = 'Редактировать'
		} else {
			e.target.innerText = 'Сохранить'
		}
		setIsEdit(!isEdit);
	}

	function onHandleChange(e) {
		const value = e.target.value.replace(/[^0-9]/g, '');
		setInput(value);
	}


	return (
		<div id={styles.budgetList}>
			<div className={styles.budgetBlock} id='budget'>
				<p className={isEdit ? styles.hideBlock : ''}>Бюджет: {budget} ₽</p><input className={isEdit ? styles.showBlock : ''} name='budget' type='text' pattern="[0-9]*" onChange={onHandleChange} value={input}></input><button onClick={onClick}>Редактировать</button>
			</div>
			<div id={styles.remaining} className={styles.budgetBlock}>
				<p>Осталось: {remaining} ₽</p>
			</div>
			<div id={styles.spent} className={styles.budgetBlock}>
				<p>Потрачено: {spent} ₽</p>
			</div>
		</div>
	)
}
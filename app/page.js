'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { getItems } from './config/commands'
import { onSnapshot, collection } from 'firebase/firestore'
import Budget from './components/budget';
import Expenses from './components/expenses';
import AddExpense from './components/add_expense';
import db from './config/db'

export default function Home() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState('2000');
  const [spent, setSpent] = useState(expenses.reduce((sum, item) => sum + item.cost, 0));
  const [remaining, setRemaining] = useState(budget - spent);
  const [search, setSearch] = useState([...expenses]);



  useEffect(() => {
    const unsub = onSnapshot(collection(db, "todo"), doc => {
      const docs = []
      doc.forEach((d) => {
        docs.push({ ...d.data(), id: d.id })
      });
      setExpenses(docs);
    })
  }, [])

  useEffect(() => {
    setSpent(prevSpent => expenses.reduce((sum, item) => sum + (item.cost - 0), 0));
    setSearch([...expenses]);
  }
    , [expenses])

  useEffect(() => {
    setRemaining(prevSpent => budget - spent);
  }, [spent, budget])


  return (
    <main className={styles.main}>
      <h1>Планировщик бюджета</h1>
      <Budget budget={budget} setBudget={setBudget} remaining={remaining} spent={spent}></Budget>
      <Expenses search={search} setSearch={setSearch} expenses={expenses} setExpenses={setExpenses}></Expenses>
      <AddExpense expenses={expenses} setExpenses={setExpenses}></AddExpense>
    </main>
  )
}

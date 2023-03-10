import React, { useEffect, useState } from "react"

import axios from "axios"

const ExpenseExplorer = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/expense/getall?username=vai`, {
        headers: {
          "Content-Type": "application/json",
        },
        username: "vai",
      })
      .then((res) => {
        console.log(res.data)
        setExpenses(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {})
  }, [])

  return (
    <div className="h-full flex flex-row justify-center items-center gap-4 flex-wrap">
      {expenses.map((items) => {
        return (
          <div className="h-64 w-48 p-4 flex flex-col justify-between items-center rounded border border-gray-200">
            <div className="text-xl">{items.name}</div>
            <div className="text-2xl font-bold">Rs. {items.amount}</div>
            <div className="">Category</div>
            <div className="text-xs">{items.date}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ExpenseExplorer

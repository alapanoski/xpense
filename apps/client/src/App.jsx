import React, { useState } from "react"

import "./App.css"
import AddNewExpense from "./components/AddNewExpense"
import ExpenseExplorer from "./components/ExpenseExplorer"
import Overview from "./components/Overview"
import PlusButton from "./components/PlusButton"
import Sidebar from "./components/Sidebar"

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className="App h-screen">
      <div className="container mx-auto h-full relative flex flex-row justify-center items-center">
        <div className="w-96 h-full justify-self-start">
          <Sidebar />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center">
          <Overview />
          <div className="w-full h-full overflow-y-scroll flex flex-col justify-start items-center">
            <ExpenseExplorer />
          </div>
        </div>
        <div
          className="absolute bottom-20 right-20"
          onClick={() => {
            setIsPopupOpen(true)
          }}
        >
          <PlusButton />
        </div>
      </div>
      <div
        className={
          (isPopupOpen ? "fixed" : "hidden") +
          " top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-gray-200 rounded shadow-xl flex flex-col justify-center items-center"
        }
      >
        <div
          className="absolute -top-10 -right-10 rotate-45"
          onClick={() => {
            setIsPopupOpen(false)
          }}
        >
          <PlusButton className="absolute top-0" />
        </div>
        <AddNewExpense />
      </div>
    </div>
  )
}

export default App

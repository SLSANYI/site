import React, { createContext, useContext, useState } from 'react'

const CounterContext = createContext(null)

function ClickButton() {
  const { count, increaseCount } = useContext(CounterContext)

  return (
    <div>
      <span>{count}</span>
      <button className="demo-btn" onClick={() => increaseCount()}>
        Increase Count
      </button>
    </div>
  )
}

function App() {
  const [value, setValue] = useState({
    count: 1,
    increaseCount() {
      setValue((pre) => ({
        ...pre,
        count: pre.count + 1
      }))
    }
  })

  return (
    <CounterContext.Provider value={value}>
      <ClickButton />
    </CounterContext.Provider>
  )
}

export default App

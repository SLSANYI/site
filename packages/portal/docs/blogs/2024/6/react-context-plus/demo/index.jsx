import React from 'react'
import { CounterProvider, useCounter } from './store/counter'

function ClickButton() {
  const { count, increaseCount } = useCounter()

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
  return (
    <CounterProvider initialState={1}>
      <ClickButton />
    </CounterProvider>
  )
}

export default App

import React, { useState } from 'react'

export default function CounterHook() {
  const [ counter, sssssetCounter ] = useState(() => 10)
  console.log('Hook 渲染')

  function handleCount() {
    // sssssetCounter(counter + 10)
    // sssssetCounter(counter + 10)
    // sssssetCounter(counter + 10)
    // sssssetCounter(counter + 10)
    // 對多次修改會進行合併

    sssssetCounter((prevState) => prevState + 10)
    sssssetCounter((prevState) => prevState + 10)
    sssssetCounter((prevState) => prevState + 10)
  }

  return (
    <div>
      <h2>當前計數 {counter}</h2>
      <button onClick={e => sssssetCounter( counter + 1 )}>+1</button>
      <button onClick={e => sssssetCounter((prevState) => prevState + 10)}>+10</button>
      <button onClick={e => handleCount()}>+10---</button>
      <button onClick={e => sssssetCounter( counter - 1)}>-1</button>
    </div>
  )
}

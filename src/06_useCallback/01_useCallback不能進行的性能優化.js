import React, { useState, useCallback } from 'react'

export default function UseCallbackDemo01() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const increment2 = useCallback( //這樣是不能進行性能優化的，因為重新render時同樣要做useCallback的函數執行，甚至increment2也是一個函數
    () => {
      setCount(count + 1)
    },[count] //如果是空數組就沒有監聽的值 useCallback內部是閉包 只會拿到第一次的值
  )

  return (
    <div>
      <h2>UseCallbackDemo01 {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1 (useCallback)</button>
    </div>
  )
}

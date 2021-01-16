import React, { useEffect, useState } from 'react'

export default function EffectCountDemo01() {
  const [count, setCount] = useState(10)

  useEffect(() => { //會在useState做一次DOM更新 然後會在useEffect中在做一次
    if(count === 0) {
      setCount(Math.random())
    }
  }, [count])

  return (
    <div>
      <h2>EffectCountDemo01</h2>
      <h2>當前計數 {count}</h2>
      <button onClick={e => setCount(0)}>改變數字</button>
    </div>
  )
}

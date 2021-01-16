import React, {  useLayoutEffect, useState } from 'react'

export default function EffectCountDemo02() {
  const [count, setCount] = useState(10)

  useLayoutEffect(() => { //會阻塞DOM更新，所以只會重新渲染一次
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

import React, { useState, useMemo } from 'react'


function caculate(count) {
  console.log('重新計算')
  let total = 0
  for(let i = 1; i <= count; i++) {
    total += i
  }
  return total
}

export default function MemoHookDemo1() {

  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  // const total = caculate(count)

  const total = useMemo(() => caculate(count), [count]) //記憶之前的數值 如果依賴的值沒有改變不重新渲染

  return (
    <div>
      <h2>MemoHookDemo1 total: {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>show</button>
    </div>
  )
}

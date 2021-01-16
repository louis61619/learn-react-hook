import React, { useRef, useState, useEffect } from 'react'

export default function RefHookDemo02() {
  const [count, setCount] = useState(0)

  const countRef = useRef(count) //將count保存進ref中，第一次為0

  useEffect(() => { // 當渲染完成之後(setState執行完畢，畫面已經更新)，重新將state中的值保存進ref中
    countRef.current = count // 雖然值會改變，但是不會執行render，所以仍然保持在上一次
  }, [count])

  // useEffect(() => {
  //   console.log('useEffect執行')
  //   setCount(count + 10) // 重新執行render
  // }, [])

  return (
    <div>
      <h2>count上一次的值 {countRef.current}</h2>
      <h2>count本次的值 {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}

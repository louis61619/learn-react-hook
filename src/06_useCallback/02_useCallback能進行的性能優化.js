import React, { useState, useCallback, memo, useMemo } from 'react'

/**
 * useCallback 在什麼時候使用?
 * 場景: 在將一個組件中的函數，傳遞給子元素進行回調使用時，使用callback對其處理，使用該回調的函數不隨著組件渲染而重新更新，導致子元素更新
 */

const HYButton = memo((props) => {
  console.log("HYButton重新渲染" + props.title)
  return <button onClick={props.increment}>+1</button>
})

export default function UseCallbackDemo02() {
  console.log("UseCallbackDemo01重新渲染")
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const increment = () => {
    setCount(count + 1)
  }

  const increment2 = useCallback(
    () => {
      setCount(count + 1)
    },[count]
  )

  const increment3 = useMemo(() => { //以useMemo的方式
    return () => {
      setCount(count + 1)
    }
  }, [count])

  return (
    <div>
      <h2>UseCallbackDemo01 {count}</h2>
      {/* <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1 (useCallback)</button> */}
      <HYButton title="01" increment={increment}></HYButton>
      <HYButton title="02" increment={increment2}></HYButton>
      <button onClick={e => setShow(!show)}>show</button>
    </div>
  )
}

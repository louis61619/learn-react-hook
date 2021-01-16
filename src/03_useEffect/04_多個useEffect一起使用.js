import React, { useState, useEffect } from 'react'

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    console.log('修改DOM')
  }, [count])

  useEffect(() => {
    console.log('訂閱事件')
    return(() => {
      console.log('取消事件')
    })
  }, [])

  useEffect(() => {
    console.log('網路請求')
  }, [])

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>當前計數 {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <h2>{isLogin? "Renny": "未登入"}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>login</button>
    </div>
  )
}

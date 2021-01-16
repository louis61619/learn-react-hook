import React, { useState } from 'react'

export default function CounterHook() {
/**
 * Hook: useState
 * > 本身是一個函數 來自react包
 * > 參數和返回值
 *   1.參數: 作用是給創建出的狀態一個默認值
 *   2.返回值: 數組
 *        元素1: 當前state的值
 *        元素2: 設置新的值時，返回的一個函數
 */

  const arr = useState(0)
  const state = arr[0]
  const setState = arr[1]

  return (
    <div>
      <h2>當前計數: {state}</h2>
      <button onClick={e => setState(state + 1)}>+1</button>
      <button onClick={e => setState(state - 1)}>-1</button>
    </div>
  )
}


import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  
  useImperativeHandle(ref, () => ({ //劫持父組件透過useref調用的事件
    focus: () => {
      inputRef.current.focus()
    }
  }), [inputRef])

  return <input ref={inputRef} type="text"/>
})

export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef()
  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
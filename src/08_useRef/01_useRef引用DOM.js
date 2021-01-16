import React, {useRef} from 'react'

export default function RefHoookDemo01() {

  const titleRef = useRef()
  const inputRef =useRef()

  function changeDom() {
    titleRef.current.innerHTML="React is my favorite"
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text"/>
      <button onClick={e => changeDom()}>修改DOM</button>
    </div>
  )
}



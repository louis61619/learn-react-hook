import React, {useEffect, useState} from 'react'

export default function HookChangeTitle() {
  const [counter, setCounter] = useState(0) 

  useEffect(() => {
    console.log(counter)
    document.title = counter
  })

  return (
    <div>
      <h2>當前計數 {counter}</h2>
      <button onClick={e => setCounter( counter+1 )}>+1</button>
    </div>
  )
}

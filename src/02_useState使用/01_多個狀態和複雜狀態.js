import React, { useState } from 'react'

export default function MultiHookState() {

  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['里雷', '拜恩', '瑪奇朵'])

  return (
    <div>
      <h2>當前計數: {counter}</h2>
      <h2>當前年齡: {age}</h2>
      <ul>
        {
          friends.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

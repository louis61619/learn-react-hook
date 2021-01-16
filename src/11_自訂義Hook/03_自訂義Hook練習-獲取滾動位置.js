import React from 'react'
import useScrollPosition from '../hooks/scrollPosition-hook'

export default function CustomHookScrollPostion() {

  const position = useScrollPosition()

  return (
    <div style={{padding: "1000px 0"}}>
      <h2 style={{position: "fixed", left: 0, top: 0,}}>CustomHookScrollPostion {position}</h2>
    </div>
  )
}

import React, { useState, useMemo, memo } from 'react'


const BYInfo = memo((props) => {
  console.log('子組件重新渲染')
  return <div>{props.info.name}、{props.info.age}</div>
})

export default function MemoHookDemo2() {

  const [show, setShow] = useState(true)

  // const info = {
  //   name: "Renny",
  //   age: 18
  // }

  const info = useMemo(() => {
    return {name: "Renny", age: 25}
  }, [])

  return (
    <div>
      <BYInfo info={info}/>
      <button onClick={e => setShow(!show)}>show</button>
    </div>
  )
}

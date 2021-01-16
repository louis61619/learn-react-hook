import React, { useEffect, useState } from 'react'

import useLocalName from '../hooks/local-store-hook'

export default function CustomHookLocalData() {

  const [name, setName] = useLocalName()

  return (
    <div>
      <h2>CustomHookLocalData: {name}</h2>
      <button onClick={e => setName('小明')}>設置名稱</button>
    </div>
  )
}

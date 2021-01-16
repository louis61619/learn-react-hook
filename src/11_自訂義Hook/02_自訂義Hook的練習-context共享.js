import React from 'react'
import useUserContext from '../hooks/user-hook'

export default function CustomHookWithContext() {

  const [user, login] = useUserContext()

  console.log(user, login)

  return (
    <div>
      <h2>CustomHookWithContext</h2>
    </div>
  )
}

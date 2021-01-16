import React, { useContext } from 'react'

import { UserContext, ThemeContext } from '../App'

export default function ContextHookDemo() {

  console.log(UserContext.Consumer, ThemeContext.Consumer)

  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  console.log(user, theme)
  
  return (
    <div>
      <h2>ContextHookDemo</h2>
      <UserContext.Consumer>
        {
          user => {
            return <h2>{user.name + ','+ user.age}</h2>
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

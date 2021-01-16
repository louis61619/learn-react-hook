import React, { useEffect } from 'react'


const Home = () => {
  useLoginLife('Home')
  return <h2>Home</h2>
}

const Profile = () => {
  useLoginLife('Profile')
  return <h2>Profile</h2>
}

export default function CustomLifeHookDemo01() {
  useLoginLife('CustomLifeHookDemo01')
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  )
}

function useLoginLife(name) {
  useEffect(() => {
    console.log(`${name}被創建`)
    return () => {
      console.log(`${name}被銷毀`)
    }
  }, [])
}
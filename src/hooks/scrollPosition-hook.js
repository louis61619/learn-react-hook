import { useEffect, useState } from 'react'

function useScrollPostion() {
  const [position, setPosition] = useState()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    console.log(window.scrollY)
    setPosition(window.scrollY)
  }

  return position
}

export default useScrollPostion
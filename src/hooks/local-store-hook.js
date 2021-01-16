import { useEffect, useState } from 'react'

function useLocalName() {
  const [name, setName] = useState(() => {
    return window.localStorage.getItem('name')
  }) //默認從localStorage中取得名稱

  useEffect(() => {
    window.localStorage.setItem("name", name)
  }, [name])

  return [name, setName]
}

export default useLocalName
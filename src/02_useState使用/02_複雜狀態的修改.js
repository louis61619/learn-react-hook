import React, {useState} from 'react'

export default function CompleteHookState() {
  const [friends, setFriends] = useState(['kobe', 'Renny'])

  const [student, setStudent] = useState([
    {
      id: 0,
      name: '里雷',
      age: 15
    },
    {
      id: 1,
      name: '榮睿',
      age: 25
    },
    {
      id: 2,
      name: "死人",
      age: 70
    }
  ])

  function addFriend() { // 有新增但是因為setState前後數組相同 所以不會重新調用
    friends.push('Louis')
    setFriends(friends)
  }

  function studentAgeWithIndex(index) {
    const newStudent = [...student]
    newStudent[index].age += 1
    setStudent(newStudent)
  }

  return (
    <div>
      <ul>
        {
          friends.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, 'Tom'])}>新增朋友</button>
      <button onClick={addFriend}>Test</button>
      
      <ul>
        {
          student.map((item, index) => {
            return (
              <li key={item.id}>
                <span>名字: {item.name} 年齡: {item.age}</span>
                <button onClick={e => studentAgeWithIndex(index)}>age +1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
  // setState執行的是替換的操作
}

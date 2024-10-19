import { useEffect, useState } from "react"

import './Friends.css'
import Friend from "./Friend";


export default function Friends() {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
    .then(data => setFriend(data))
  })
  return (
    <div className="box">
      <h2>Friends:{friend.length}</h2>
      {
        friend.map(friends => <Friend users={friends}></Friend>)
      }
    </div>
  )
}
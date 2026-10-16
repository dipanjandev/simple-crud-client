import UserCard from "@/components/UserCard"
import React from "react"

interface IDataType {
  _id: string
  name: string
  email: string
}

const usersPage = async () => {
  const res = await fetch("http://localhost:5000/users/")
  const users: IDataType[] = await res.json()

  return (
    <div>
      <h1>Here is users Length {users.length}</h1>
      <div className="container mx-auto grid grid-cols-3 gap-5">
        {users.map((user) => (
          <UserCard user={user} key={user._id}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default usersPage

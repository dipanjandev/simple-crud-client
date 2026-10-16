import Link from "next/link"
import React from "react"

const UserDetailPage = async ({ params }) => {
  const { userId } = await params
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const data = await res.json()
  //   console.log(data)

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <Link href={"/users"}>
        <button className="mt-5 rounded-2xl bg-amber-500 px-10 py-5 text-lg font-bold text-[#1a1a1a]">
          Back To Previous Page
        </button>
      </Link>
    </div>
  )
}

export default UserDetailPage

"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"
import UpdateUserDialog from "../components/UpdateUserDialog"

const UserCard = ({ user }) => {
  // console.log(user)

  const { _id } = user

  const router = useRouter()

  const handleDeleteUser = async () => {
    // console.log("Deleted User", _id)
    const res = await fetch(`http://localhost:5000/users/${_id}`, {
      method: "delete",
    })
    const afterDelete = await res.json()
    console.log(afterDelete)
    if (afterDelete.deletedCount > 0) {
      console.log("User Delete Successfully")
      router.refresh()
    }
  }

  return (
    <div>
      <Card className="relative mx-auto pt-0">
        <CardHeader>
          <CardAction>
            {/* <Badge variant="secondary">Featured</Badge> */}
          </CardAction>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center gap-3">
          <Link href={`/users/${user._id}`}>
            <Button className="w-full">View Event</Button>
          </Link>
          <UpdateUserDialog user={user}></UpdateUserDialog>
          <Button onClick={() => handleDeleteUser()} variant={"destructive"}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard

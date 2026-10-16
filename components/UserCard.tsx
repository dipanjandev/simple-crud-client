import React from "react"
// import { Badge } from "@/components/ui/badge"
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

const UserCard = ({ user }) => {
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
        <CardFooter>
          <Link href={`/users/${user._id}`}>
            <Button className="w-full">View Event</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard

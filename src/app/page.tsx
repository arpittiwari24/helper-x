'use client'
import {useSession} from "next-auth/react"
import Hero from "./components/Hero"

export default function Home() {

  const {data: session} = useSession()

  if(session && session.user) {
    return (
      <h1>Hello {session.user.name}</h1>
    )
  }
  return (
    <div className="py-24">
      <Hero />
    </div>
  )
}

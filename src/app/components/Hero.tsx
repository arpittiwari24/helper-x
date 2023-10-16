
import { signIn } from "next-auth/react"
export default function Hero() {
    return (
        <div className="hero text-gray-700">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold">Unlock the Power of Persuasion</h1>
      <p className="py-6">Are you ready to embark on your dream career? Your journey starts here. Welcome to Helper-X, where we turn job seekers into job-getters through the art of persuasive communication.</p>
      <button className="btn btn-primary hover:animate-pulse" onClick={() => signIn("google")}>Get Started</button>
    </div>
  </div>
</div>
    )
}
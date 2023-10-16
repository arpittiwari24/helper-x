import SigninButton from "./SignInButton";

export default function Navbar() {
    return (
        <div className="navbar text-gray-700">
  <div className="flex-1">
    <h1 className=" normal-case text-3xl font-bold">Helper-<span className="text-3xl font-extrabold">X</span></h1>
  </div>
  <div className="flex-none">
   <SigninButton />
  </div>
</div>
    )
}
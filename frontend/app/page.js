

export default function Home() {
  return (
    <div className="flex flex-col">
     <a href="employee/auth/sign-in" className=" no-underline text-inherit">Login</a>
     <a href="employee/auth/sign-up" className=" no-underline text-inherit">Signup</a>
     <a href="freelancer/auth/sign-in" className=" no-underline text-inherit">Login</a>
     <a href="freelancer/auth/sign-up" className=" no-underline text-inherit">Register</a>
    </div>
  )
}

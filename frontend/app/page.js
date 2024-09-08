import Image from "next/image";

export default function Home() {
  return (
    <div>
     <a href="/user" className=" no-underline text-inherit">Login</a>
     <a href="/Dashboard" className=" no-underline text-inherit">Dashboard</a>
    </div>
  );
}

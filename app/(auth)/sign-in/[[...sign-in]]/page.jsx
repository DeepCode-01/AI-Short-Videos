import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" bg-slate-800">
      <div
      className="flex justify-center items-center h-screen"><SignIn/></div>
    </div>
  );
}

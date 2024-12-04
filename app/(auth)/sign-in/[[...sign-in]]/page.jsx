import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 bg-slate-800">
      <div >
        <Image src={'/login1.png'} alt="login" width={500} height={800} className="w-full object-contain"/>
      </div>
      <div
      className="flex justify-center items-center h-screen"><SignIn/></div>
    </div>
  );
}

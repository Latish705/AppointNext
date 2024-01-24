"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
const page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [show,setShow] = useState(false)

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    //console.log(userData.username, userData.password);
  };
  return (
    <div className=" flex flex-row bg-[#ccd5ae] ">
      <div className="border-2 border-black w-1/2 h-screen lg:block 2xl:block sm:flex flex-col md:block items-center justify-center hidden lg:flex md:flex">
        <Image
          src="./login.svg"
          width={500} // Set the width of the image
          height={300}
        />
      </div>

      <div className="border-2 border-black w-full sm:w-full md:w-1/2 lg:xl:w-1/2 h-screen flex flex-col items-center justify-center gap-2 ">
        <div className="flex flex-col w-[400px]">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="border-2 border-black rounded p-1  bg-[#d4a373] "
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="border-2 border-black rounded p-1  bg-[#d4a373] "
            name="username"
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[400px] ">
          <label htmlFor="password">Password</label>
          <input
            type={show?'text':'password'}
            className="border-2 border-black rounded p-1 bg-[#d4a373] "
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button className=" border text-black bg-blue-400 rounded-md p-2 border-slate-900" onClick={() => setShow((prev) => (!prev))}>show</button>
        <p>
          Dont have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className=" hover:cursor-pointer hover:text-blue-500 text-blue-400"
          >
            create one....
          </span>
        </p>

        <button className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1 bg-[#fefae0] ">
          Login
        </button>
        <h1>OR</h1>
        <div className="flex flex-row">
          <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
            <FaGoogle className="text-2xl static" />
            <button className="">Google</button>
          </div>
          <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
            <FaFacebook className="text-2xl" />
            <button className="">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

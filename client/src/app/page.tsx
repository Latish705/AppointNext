"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    //console.log(userData.username, userData.password);
  };
  return (
    <div className=" flex flex-row">
      <div className="border-2 border-black w-1/2 h-screen lg:block 2xl:block sm:hidden md:block  hidden "></div>
      <div className="border-2 border-black xl:lg:2xl:lg:md:w-1/2 h-screen flex flex-col items-center justify-center gap-2 sm:w-screen w-screen">
        <div className="flex flex-col w-[400px]">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="border-2 border-black rounded p-1"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="border-2 border-black rounded p-1"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <p>
          Dont have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className=" hover:cursor-pointer hover:text-blue-500 text-blue-400"
          >
            create one....
          </span>
        </p>

        <button className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1">
          Login
        </button>
        <h1>OR</h1>
        <div className="flex flex-row">
          <button className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1">
            Login with Google
          </button>
          <button className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

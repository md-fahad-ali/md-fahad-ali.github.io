"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <div className="p-3 w-screen h-screen bg-slate-800 text-white">
      <div className="flex relative top-10 left-10">
        <Image
          src={"/projects/Fahad.png"}
          className=" rounded-full"
          style={{
            border: "3px solid white",
          }}
          
          priority
          loading="eager"
          alt="Md.Fahad Ali"
          width={100}
          height={100}
        />
        <div className="flex w-[8%] top-2 relative left-3 flex-col">
          <h1 className="font-bold text-xl relative left-0 mb-2">Contact</h1>

          <Link href={"mailto:fahad288ali@gmail.com"}>
            <div
              className="sm:w-[100px] md: relative md: left-[14px] w-auto flex items-center justify-center"
              style={{
                border: "2px solid white",
                width: "clamp(6.25rem, 7.1181rem + -3.7037vw, 3.125rem)",
              }}
            >
              <IoIosMail /> Mail me
            </div>
          </Link>

          <div className="flex relative top-3 left-3 gap-2">
            <Link href={"https://www.linkedin.com/in/fahad-ali-111034164/"}>
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link href={"https://www.facebook.com/i.me.fahad.ali"}>
              <FaFacebookSquare className="text-3xl" />
            </Link>
            <Link href={"https://twitter.com/FahadAl40129449"}>
              <FaSquareXTwitter className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

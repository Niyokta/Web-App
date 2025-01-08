"use client";
import React from "react";
<<<<<<< HEAD
import { IoIosArrowDown, IoIosArrowUp } from "../general/reacticons";
=======
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp, BiEdit } from "../general/reacticons"
>>>>>>> ffce78e3dda822bc50f6d276b64640c0f5a56690
import { useAppSelector } from "@/lib/reduxHooks";
import PersonalInfoBox from "./PersonalInfoBox";
export default function PersonalInfo() {
<<<<<<< HEAD
  const [part, setpart] = React.useState(false);
  return (
    <div
      className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col"
      style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}
    >
      <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
        <p className="text-[20px] font-bold">Personal Information</p>
        {!part ? (
          <IoIosArrowDown
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={() => {
              setpart(!part);
            }}
          />
        ) : (
          <IoIosArrowUp
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={() => {
              setpart(!part);
            }}
          />
        )}
      </div>
=======
    const [loading, setloading] = React.useState(true)
    const [part, setpart] = React.useState(false);
    return (
        <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
            <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                <p className="text-[20px] font-bold">Personal Information</p>
                {!part ? <IoIosArrowDown className="w-[30px] h-[30px] cursor-pointer" onClick={
                    () => {
                        setpart(!part)
                    }
                } /> : <IoIosArrowUp className="w-[30px] h-[30px] cursor-pointer" onClick={
                    () => {
                        setpart(!part)
                    }
                } />}
            </div>
>>>>>>> ffce78e3dda822bc50f6d276b64640c0f5a56690

      {/* content  */}

<<<<<<< HEAD
      <div
        className="w-full max-h-[430px] font-light text-[14px]"
        style={{ display: part ? "block" : "none", userSelect: "none" }}
      >
        <div className="w-[80%] h-[50px] flex p-[20px] items-center">
          {" "}
          <p className="w-[30%] pr-[40px] font-medium">Name</p>{" "}
          <p>{useAppSelector((state) => state.user.userName)}</p>{" "}
=======

            <div className="w-full max-h-[430px] font-light text-[14px] p-[20px]" style={{ display: part ? 'block' : 'none', userSelect: 'none' }} >
                {/* <div className="w-[100%] flex justify-end">
                        <BiEdit className="w-[20px] h-[20px]"/>
                    </div> */}
                <div className="px-[20px] mb-[30px]">
                    <div className="flex">
                        <p className="text-[30px] pr-[10px]">{useAppSelector(state => state.user.userName)}</p>
                        <BiEdit className="w-[15px] h-[15px] cursor-pointer" />
                    </div>
                    <div className="flex w-[200px] text-[12px] h-[30px] items-center">
                        <Link href={useAppSelector(state => state.user.linkedin)} className="text-blue-600 font-bold pr-[7px]">LinkedIn | </Link>
                        <Link href={useAppSelector(state => state.user.github)} className="text-blue-600 font-bold pr-[7px]">GitHub |</Link>
                        <Link href={useAppSelector(state => state.user.x)} className="text-blue-600 font-bold">Twitter/X</Link>
                    </div>
                </div>
                <div>
                    <PersonalInfoBox key1="Email ID" val1={useAppSelector(state => state.user.email)} key2="Phone Number" val2={useAppSelector(state => state.user.phoneNumber)} />
                    <PersonalInfoBox key1="Date of Birth" val1={useAppSelector(state => state.user.birth_date)} key2="Nationality" val2={useAppSelector(state => state.user.country)} />
                    <PersonalInfoBox key1="Working Hours" val1={useAppSelector(state => state.user.working_hours)} key2="" val2="" />
                </div>
            </div>
>>>>>>> ffce78e3dda822bc50f6d276b64640c0f5a56690
        </div>
        <div className="w-[80%] h-[50px] flex p-[20px] items-center">
          {" "}
          <p className="w-[30%] pr-[40px] font-medium">Email ID</p>{" "}
          <p>{useAppSelector((state) => state.user.email)}</p>{" "}
        </div>
        <div className="w-[80%] h-[50px] flex p-[20px] items-center">
          {" "}
          <p className="w-[30%] pr-[40px] font-medium">Phone </p>{" "}
          <p>{useAppSelector((state) => state.user.phoneNumber)}</p>{" "}
        </div>
      </div>
    </div>
  );
}

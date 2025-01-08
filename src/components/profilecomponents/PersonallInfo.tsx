"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "../general/reacticons";
import { useAppSelector } from "@/lib/reduxHooks";
export default function PersonalInfo() {
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

      {/* content  */}

      <div
        className="w-full max-h-[430px] font-light text-[14px]"
        style={{ display: part ? "block" : "none", userSelect: "none" }}
      >
        <div className="w-[80%] h-[50px] flex p-[20px] items-center">
          {" "}
          <p className="w-[30%] pr-[40px] font-medium">Name</p>{" "}
          <p>{useAppSelector((state) => state.user.userName)}</p>{" "}
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

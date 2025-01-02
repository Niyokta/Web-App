'use client'
import React from "react";
import { PersonalInfo, Education, Experience, Projects } from "@/components";
export default function profile() {
    return (
        <>
            <PersonalInfo />
            <Projects />
            <Education />
            <Experience />
        </>
    )
}
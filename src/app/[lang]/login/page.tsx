import {Card, CardBody, Input, Button, Image, Divider, Select, SelectItem} from "@heroui/react";
import { redirect } from "next/navigation";
import {CardFooter, CardHeader} from "@heroui/card";
import Link from "next/link";

// ✅ Server Action to handle login
async function loginAction(formData) {
    "use server";

    const login = formData.get("login");
    const password = formData.get("password");

    console.log("Login attempt:", { login, password });

    // Simple demo auth
    if (login === "admin" && password === "1234") {
        console.log("Login successful!");
        redirect("/dashboard"); // redirect after login
    } else {
        console.log("Invalid credentials");
    }
}

import React from 'react';
import Selector from "@/components/selector/selector";
import Form from "@/app/[lang]/login/components/registerLoginForm";
import RegisterLoginForm from "./components/registerLoginForm";

const LoginPage = async () => {
    const backUrl = process.env.API_SERVICE_URL;
    const request = await fetch(`${backUrl}platform-owner/5`)
    const data = await request.json();
    const requestConst = await fetch(`${backUrl}constant/all`)
    const consts = await requestConst.json();

    console.log('###',consts );

     const animals = [
        {key: "cat", label: "Cat"},
        {key: "dog", label: "Dog"},
        {key: "elephant", label: "Elephant"},
        {key: "lion", label: "Lion"},
        {key: "tiger", label: "Tiger"},
        {key: "giraffe", label: "Giraffe"},
        {key: "dolphin", label: "Dolphin"},
        {key: "penguin", label: "Penguin"},
        {key: "zebra", label: "Zebra"},
        {key: "shark", label: "Shark"},
        {key: "whale", label: "Whale"},
        {key: "otter", label: "Otter"},
        {key: "crocodile", label: "Crocodile"},
    ];
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
            <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-3'>
                <RegisterLoginForm items={consts}/>
            </div>
        </div>
    );
};

export default LoginPage;
import { CardFooter, CardHeader } from "@heroui/card";
import { Button, Card, CardBody, Divider, Input } from "@heroui/react";
import Form from "next/form";
import { redirect } from "next/navigation";
import React from 'react';

import RegisterForm from "@/app/[lang]/login/components/registerForm";
import { auth, signIn } from "@/auth";
import { getUserType } from "@/lib/helpers/userType";
import { getConstants } from "@/lib/queries/constant";

const LoginPage = async () => {
    const session = await auth()

    if(session) {
        // @ts-ignore
        const userType = getUserType(session);
        redirect(`${userType}`)
    }

    const { accountTypes } = await getConstants();

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
            <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-3'>
                <>
                    <RegisterForm accountTypes={ accountTypes } />
                    <p className='text-center md:mt-[12%]'>OR</p>
                    <Card className='min-w-6/12 m-3'>
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <h1 className='text-2xl'>Login</h1>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className='flex gap-3'>
                            <Form action={ async (formData) => {
                                "use server"
                                await signIn("credentials", formData)
                            } } id='user_login_form'>
                                <div className='fields'>
                                    <Input labelPlacement='outside-top' isRequired={ true } label="Email" placeholder="Enter your email" type="email" name='email' />
                                    <Input labelPlacement='outside-top' isRequired={ true } required label="Password" placeholder="Enter your password" type="password" name='password' />
                                </div>
                            </Form>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button type='submit' form='user_login_form'>Login</Button>
                        </CardFooter>
                    </Card>
                </>
            </div>
        </div>
    );
};

export default LoginPage;
import {Card, CardBody, Input, Button, Image, Divider, Select, SelectItem} from "@heroui/react";
import { redirect } from "next/navigation";
import {CardFooter, CardHeader} from "@heroui/card";
import Link from "next/link";


import React from 'react';
import Form from "next/form";
import {signIn} from "@/auth";

const LoginPage = async () => {
    const backUrl = process.env.API_SERVICE_URL;
    // const requestConst = await fetch(`${backUrl}/constant/all`)
    // const consts = await requestConst.json();

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
            <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-3'>
                <>
                    <Card className='min-w-6/12 m-3'>
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <h1 className='text-2xl'>Register new account</h1>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className='flex gap-3'>
                            <div className='fields flex gap-3 flex-col'>
                                <Input labelPlacement='outside-top' isRequired={true} label="Email" placeholder="Enter your email" type="email" />
                                <Input labelPlacement='outside-top' isRequired={true} required label="Password" placeholder="Enter your password" type="password" />
                                {/*<Select*/}
                                {/*    labelPlacement='outside'*/}
                                {/*    className="flex"*/}
                                {/*    items={consts}*/}
                                {/*    label="Type"*/}
                                {/*    placeholder="Select type of account"*/}
                                {/*>*/}
                                {/*    {(type) => <SelectItem key={type.key}>{type.label}</SelectItem>}*/}
                                {/*</Select>*/}
                            </div>
                        </CardBody>

                        <Divider />
                        <CardFooter>
                            <Button>Register</Button>
                        </CardFooter>
                    </Card>
                    <p className='text-center md:mt-[12%]'>OR</p>
                    <Card className='min-w-6/12 m-3'>
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <h1 className='text-2xl'>Login</h1>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className='flex gap-3'>
                            <Form action={async (formData) => {
                                "use server"
                                await signIn("credentials", formData)
                            }} id='user_login_form'>
                                <div className='fields'>
                                    <Input labelPlacement='outside-top' isRequired={true} label="Email" placeholder="Enter your email" type="email" name='email' />
                                    <Input labelPlacement='outside-top' isRequired={true} required label="Password" placeholder="Enter your password" type="password" name='password' />
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
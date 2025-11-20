'use client';
import { CardFooter, CardHeader } from "@heroui/card";
import { Button, Card, CardBody, Divider, Input, Select, SelectItem } from "@heroui/react";
import Form from "next/form";
import React from 'react';

import { registerAction } from "@/actions/registerAction";
import { Constant } from "@/types/constants";

const RegisterForm = ({ accountTypes }: { accountTypes: Constant[]}) => {
    const handleRegister = async (formData: FormData) => {
        await registerAction(formData)
    }
    return (
        <Card className='min-w-6/12 m-3'>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <h1 className='text-2xl'>Register new account</h1>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className='flex gap-3'>
                <Form id="register_form" action={ handleRegister }>
                    <div className='fields flex gap-3 flex-col'>
                        <Input labelPlacement='outside-top' isRequired={ true } name='email' label="Email" placeholder="Enter your email" type="email" />
                        <Input labelPlacement='outside-top' isRequired={ true } required name='password' label="Password" placeholder="Enter your password" type="password" />
                        <Select
                            name='type'
                            labelPlacement='outside'
                            className="flex"
                            items={ accountTypes }
                            label="Type"
                            placeholder="Select type of account"
                        >
                            { (type) => <SelectItem key={ type.key }>{ type.label }</SelectItem> }
                        </Select>
                    </div>
                </Form>
            </CardBody>

            <Divider />
            <CardFooter>
                <Button type='submit' form='register_form'>Register</Button>
            </CardFooter>
        </Card>
    );
};

export default RegisterForm;
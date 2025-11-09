'use client';

import React from 'react';
import {Button, Card, CardBody, Divider, Input, Select, SelectItem} from "@heroui/react";
import {CardFooter, CardHeader} from "@heroui/card";

const RegisterLoginForm = ({items}: {items:  Iterable<{ key: string, label: string|number }>}) => {
    return (
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
                        <Select
                            labelPlacement='outside'
                            className="flex"
                            items={items}
                            label="Type"
                            placeholder="Select type of account"
                        >
                            {(type) => <SelectItem key={type.key}>{type.label}</SelectItem>}
                        </Select>
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
                    <div className='fields'>
                        <Input labelPlacement='outside-top' isRequired={true} label="Email" placeholder="Enter your email" type="email" />
                        <Input labelPlacement='outside-top' isRequired={true} required label="Password" placeholder="Enter your password" type="password" />
                    </div>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button>Login</Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default RegisterLoginForm;
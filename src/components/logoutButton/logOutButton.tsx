'use client';

import { Button } from "@heroui/react";
import { signOut } from "next-auth/react";
import React from 'react';

// TODO: convert to server components
const LogOutButton = () => {
    return (
        <Button className='w-full' onPress={ () => signOut({ redirectTo: "/" }) }>
               Logout
        </Button>
    );
};

export default LogOutButton;
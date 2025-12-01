'use client';

import { Button } from "@heroui/react";
import { signOut } from "next-auth/react";
import React from 'react';

const LogOutButton = () => {
    return (
        <Button onPress={ () => signOut({ redirectTo: "/" }) }>
            Logout
        </Button>
    );
};

export default LogOutButton;
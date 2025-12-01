import React from 'react';

import { auth } from "@/auth";
import LogOutButton from "@/components/logoutButton/logOutButton";

const Sidebar = async () => {
    const session = await auth()

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            sidebar
            { session?.user && <LogOutButton/> }
        </div>
    );
};

export default Sidebar;
'use client';

import { Navbar,NavbarContent, NavbarItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import LogOutButton from "@/components/logoutButton/logOutButton";
import PwaButton from "@/components/pwaButton/pwaButton";
import { BasicUser } from "@/types/user";

const TopNavigation = ({ lang, user }: { lang: string, user: BasicUser | null}) => {
    return (
        <Navbar isBordered isBlurred={ false }>
            <NavbarItem>
                <Image src="/logo.jpeg" width={ 180 } height={ 170 } alt="Mekko project logo" className='rounded-2xl object-cover w-[60px]' />
            </NavbarItem>
            <NavbarContent>
                <NavbarItem className='w-[200px]'>
                    <PwaButton />
                </NavbarItem>
            </NavbarContent>
            { /*<NavbarContent className="hidden sm:flex gap-4" justify="center">*/ }
            { /*    <NavbarItem>*/ }
            { /*        <Link color="foreground" href="#">*/ }
            { /*            Features*/ }
            { /*        </Link>*/ }
            { /*    </NavbarItem>*/ }
            { /*    <NavbarItem isActive>*/ }
            { /*        <Link aria-current="page" href="#">*/ }
            { /*            Customers*/ }
            { /*        </Link>*/ }
            { /*    </NavbarItem>*/ }
            { /*    <NavbarItem>*/ }
            { /*        <Link color="foreground" href="#">*/ }
            { /*            Integrations*/ }
            { /*        </Link>*/ }
            { /*    </NavbarItem>*/ }
            { /*</NavbarContent>*/ }
            <NavbarContent justify="end">
                <NavbarItem>
                    { !user && <Link href={ `${lang}/login` }>Login or Register</Link> }
                    { user && <LogOutButton/> }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default TopNavigation;
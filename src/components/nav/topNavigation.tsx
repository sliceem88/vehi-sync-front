'use client';

import { Navbar,NavbarContent, NavbarItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import LogOutButton from "@/components/logoutButton/logOutButton";
import PwaButton from "@/components/pwaButton/pwaButton";
import { useLocale } from "@/lib/hooks/useLocale";
import { GeneralDictionaryType } from "@/types/dictionary";
import { BasicUser } from "@/types/user";

const menuOptions: Record<string, {key:string, url: string}[]> = {
    "owner": [
        { 'key': 'vehicles', 'url': 'owner/vehicles' },
        { 'key': 'services', 'url': 'owner/services' },
        { 'key': 'profile', 'url': 'owner/profile' },
        { 'key': 'dashboard', 'url': 'owner' },
    ],
    "service": [
        { 'key': 'mechanics', 'url': 'service/mechanics' },
        { 'key': 'owners', 'url': 'service/owners' },
        { 'key': 'profile', 'url': 'service/profile' },
        { 'key': 'jobs', 'url': 'service/jobs' },
        { 'key': 'dashboard', 'url': 'service' },
    ],
    "mechanic": [
        { 'key': 'vehicles', 'url': 'mechanic/vehicles' },
        { 'key': 'services', 'url': 'mechanic/services' },
        { 'key': 'profile', 'url': 'mechanic/profile' },
    ],
    "operator": [
        { 'key': 'owner', 'url': 'operator/owners' },
        { 'key': 'vehicles', 'url': 'operator/vehicles' },
        { 'key': 'profile', 'url': 'operator/profile' },
    ]
}

const TopNavigation = ({ lang, user, dictionary }: { lang: string, user: BasicUser | null, dictionary: GeneralDictionaryType}) => {
    // TODO: fix typing
    // @ts-ignore
    const menuItems = menuOptions[user?.userType] ?? [];
    const locale = useLocale();

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
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                { menuItems?.map(menuItem => <NavbarItem key={ menuItem.key }>
                    <Link href={ `/${locale}/${menuItem.url}` }>
                        { dictionary.menu[menuItem.key as keyof typeof dictionary.menu] }
                    </Link>
                </NavbarItem>) }
            </NavbarContent>
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
'use client';

import './style.scss';

import { BriefcaseBusiness, Car, Contact, DoorOpen, UserRoundPen, Warehouse, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import React, { JSX } from 'react';

import { useLocale } from "@/lib/hooks/useLocale";
import { GeneralDictionaryType } from "@/types/dictionary";
import { BasicUser } from "@/types/user";

const menuOptions: Record<string, {key:string, url: string, icon: JSX.Element}[]> = {
    "owner": [
        { 'key': 'vehicles', 'url': 'owner/vehicles', icon: <Car size={ 18 } /> },
        { 'key': 'services', 'url': 'owner/services' , icon: <Warehouse size={ 18 } /> },
        { 'key': 'profile', 'url': 'owner/profile', icon: <UserRoundPen size={ 18 } /> },
        { 'key': 'dashboard', 'url': 'owner', icon: <Contact size={ 18 } /> },
    ],
    "service": [
        { 'key': 'mechanics', 'url': 'service/mechanics', icon: <Wrench size={ 18 } /> },
        { 'key': 'owners', 'url': 'service/owners', icon: <Contact size={ 18 } /> },
        { 'key': 'profile', 'url': 'service/profile', icon: <UserRoundPen size={ 18 } /> },
        { 'key': 'jobs', 'url': 'service/jobs', icon: <BriefcaseBusiness size={ 18 } /> },
        { 'key': 'dashboard', 'url': 'service', icon: <Warehouse size={ 18 } /> },
    ],
    "mechanic": [
        { 'key': 'vehicles', 'url': 'mechanic/vehicles', icon: <Car size={ 18 } /> },
        { 'key': 'services', 'url': 'mechanic/services', icon: <Warehouse size={ 18 } /> },
        { 'key': 'profile', 'url': 'mechanic/profile', icon: <UserRoundPen size={ 18 } /> },
    ],
    "operator": [
        { 'key': 'owner', 'url': 'operator/owners', icon: <Contact size={ 18 } /> },
        { 'key': 'vehicles', 'url': 'operator/vehicles', icon: <Car size={ 18 } /> },
        { 'key': 'profile', 'url': 'operator/profile', icon: <UserRoundPen size={ 18 } /> },
    ]
}

const Sidebar = ({ lang, user, dictionary }: { lang: string, user: BasicUser | null, dictionary: GeneralDictionaryType}) => {
    // TODO: fix typing
    // @ts-ignore
    const menuItems = menuOptions[user?.userType] ?? [];
    const locale = useLocale();
    const pathname = usePathname();
    const profileItem = menuItems.find((menuItem) => menuItem.key === 'profile');

    return (
        <>
            <aside className="h-screen pt-2 flex flex-col justify-between border-r-1 relative">
                <div className="Menu-Burger">
                    <span className="Menu-Burger__bar"></span>
                    <span className="Menu-Burger__bar"></span>
                    <span className="Menu-Burger__bar"></span>
                </div>
                <div>
                    <div className='w-full justify-center flex'>
                        <Link href={ `/${lang}` }>
                            <Image src="/logo.jpeg" width={ 180 } height={ 170 } alt="Mekko project logo"
                                className='rounded-2xl object-cover w-[60px]'/>
                        </Link>
                    </div>
                    <nav className="Menu flex flex-col gap-1 px-3 py-4 min-w-[200px]">
                        { menuItems.map((item) => {
                            const href = `/${locale}/${item.url}`;
                            const isActive = pathname === href;

                            return (
                                <Link
                                    key={ item.key }
                                    href={ href }
                                    className={ `Menu-Item ${isActive ? "Menu-Item__active" : ""}` }
                                >
                                    <span className='flex flex-row gap-2'>
                                        { item.icon }{ dictionary.menu[item.key as keyof typeof dictionary.menu] }
                                    </span>
                                </Link>
                            );
                        }) }
                        { !user && <Link href={ `${lang}/login` }>Login or Register</Link> }
                    </nav>
                </div>
                { user && <div className='flex flex-col justify-center p-3 gap-2'>
                    <Link
                        key={ profileItem!.key }
                        href={ `/${locale}/${profileItem!.url}` }
                        className={ `Menu-Item ${pathname === `/${locale}/profile` ? "Menu-Item__active" : ""}` }
                    >
                        <span className='flex flex-row gap-2'>
                            { profileItem!.icon }{ dictionary.menu[profileItem!.key as keyof typeof dictionary.menu] }
                        </span>
                    </Link>
                    <button className='Menu-Item Menu-LogOut' onClick={ () => signOut({ redirectTo: "/" }) }>
                        <div className='flex flex-row gap-2'>
                            <DoorOpen/> Logout
                        </div>
                    </button>
                </div> }
            </aside>
        </>
    );
};

export default Sidebar;
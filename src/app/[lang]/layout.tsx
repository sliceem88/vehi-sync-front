import React from 'react';

import TopNavigation from "@/components/nav/TopNavigation";
import Sidebar from "@/components/sidebar/sidebar";
import RegisterSW from "@/components/sw/register-sw";

const MainLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <section className="flex">
            <Sidebar />
            <RegisterSW />
            <div className="w-full">
                <TopNavigation />
                { children }
            </div>
        </section>
    );
};

export default MainLayout;
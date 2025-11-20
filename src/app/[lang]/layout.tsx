import React from 'react';

import TopNavigation from "@/components/nav/TopNavigation";
import Sidebar from "@/components/sidebar/sidebar";

const MainLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <section className="flex">
            <Sidebar />
            <div className="w-full">
                <TopNavigation />
                { children }
            </div>
        </section>
    );
};

export default MainLayout;
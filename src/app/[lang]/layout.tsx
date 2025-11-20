import React from 'react';
import Sidebar from "@/components/sidebar/sidebar";
import TopNavigation from "@/components/nav/TopNavigation";

const MainLayout = ({children}) => {
    return (
        <section className="flex">
            <Sidebar />
            <div className="w-full">
                <TopNavigation />
                {children}
            </div>
        </section>
    );
};

export default MainLayout;
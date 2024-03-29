import React, { useEffect } from 'react';
import ContentHeader from '../../components/front/ContentHeader';
import { DashboardProvider } from '../../context/Dashboard';
import { SidebarProvider } from '../../context/SideBar';
import ContentDashboard from '../../components/back/ContentDashboard';
import ContentSidebar from '../../components/back/ContentSidebar';


function Dashbord({ title }) {

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-dashboad">
            <ContentHeader>
                Dashboard
            </ContentHeader>
            <div className="flex">
                <SidebarProvider>
                    <ContentSidebar />
                </SidebarProvider>
                <DashboardProvider>
                    <ContentDashboard />
                </DashboardProvider>
            </div>
        </section>
    );
}

export default Dashbord;

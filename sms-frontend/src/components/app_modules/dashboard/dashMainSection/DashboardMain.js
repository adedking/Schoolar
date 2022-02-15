import React from 'react';
import NewStudentTable from './NewStudentTable';
import { LineChart } from './DashboardChart';
import RecentActivity from './RecentActivity';


const DashboardMain = () => {
    return (
        <section id="dash-main">
            <div id="dash-main-left">
                <NewStudentTable />
            </div>
            <div id="dash-main-right">
                <LineChart />
                <RecentActivity />
            </div>
        </section>
    );
};
export default DashboardMain;
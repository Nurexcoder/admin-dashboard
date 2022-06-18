import { useEffect, useState } from "react";
import SideNav from "../SideNav";
import './Dashboard.css'

import DashboardBody from "./DashboardBody";

const Dashboard = () => {
    const [sidenav, setSideNav] = useState(true);

    useEffect(() => { }, [sidenav]);
    return (
        <div className="dashboard-main" style={{ backgroundColor: '#F4F7FE' }}>
            {/* <SideNav className="sidenav" /> */}
            <div
                className={` dashboard-container `} style={{ backgroundColor: '#F4F7FE' }} >
                {/* <DashboardNav /> */}
                <DashboardBody />
            </div>
        </div>
    );
};

export default Dashboard;

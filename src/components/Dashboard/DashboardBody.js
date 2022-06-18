import { useState } from "react";
import DashboardApplicationGraph from "./DashboardApplicationGraph";
import DashboardUserGraph from "./DashboardUserGraph";
import DashboardJobGraph from "./DashboardJobGraph";
// import { Progress } from "reactstrap";
import { CircularProgress } from "@mui/material";

const DashboardBody = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    // const [percent, setPercent] = useState(
    //     Math.round(user.percentageOfProfileCompletion * 100)
    // );
    // log
    return (
        <div className='dashboard-body-container  '>
          
            
            <div className='dashboard-body'>
                <div className='dashboard-upper-body'>
                    <div className='dashboard-application-response'>
                        <h4 className='dashboard-header-2'>
                            Application Response
                        </h4>
                        <div className='dashboard-application-response-indicator '>
                            <div className='dashboard-indicator-shortlisted dashboard-indicator'>
                                <span className='dashboard-indicator-shortlisted-color dashboard-indicator-color'></span>
                                <span className='dashboard-indicator-shortlisted-name  '>
                                    Shortlisted
                                </span>
                            </div>
                            <div className='dashboard-indicator-hired dashboard-indicator'>
                                <div className='dashboard-indicator-hired-color dashboard-indicator-color'></div>
                                <span className='dashboard-indicator-hired-name'>
                                    Hired
                                </span>
                            </div>
                            <div className='dashboard-indicator-rejected dashboard-indicator'>
                                <span className='dashboard-indicator-rejected-color dashboard-indicator-color'></span>
                                <span className='dashboard-indicator-rejected-name'>
                                    Rejected
                                </span>
                            </div>
                        </div>
                        <DashboardApplicationGraph />
                    </div>
                    <div className='dashboard-application-numbers'>
                        <div className='dashboard-application-numbers1 '>
                            <h5 className='dashboard-application-numbers-header '>
                                Today's Booking
                            </h5>
                            <div className='dashboard-application-numbers-body '>
                                <h3 className='dashboard-application-number-total-header'>
                                    4000
                                </h3>
                                <span className='dashboard-application-number-percentage'>
                                    10.00% (30days)
                                </span>
                            </div>
                        </div>
                        <div className='dashboard-application-numbers2'>
                            <h5 className='dashboard-application-numbers-header '>
                                Total Booking
                            </h5>
                            <div className='dashboard-application-numbers-body '>
                                <h3 className='dashboard-application-number-total-header'>
                                    61222
                                </h3>
                                <span className='dashboard-application-number-percentage'>
                                    22.20% (30days)
                                </span>
                            </div>
                        </div>
                        <div className='dashboard-application-numbers3'>
                            <h5 className='dashboard-application-numbers-header '>
                                Numbers of Meeting
                            </h5>
                            <div className='dashboard-application-numbers-body '>
                                <h3 className='dashboard-application-number-total-header'>
                                    400032
                                </h3>
                                <span className='dashboard-application-number-percentage'>
                                    10.00% (30days)
                                </span>
                            </div>
                        </div>
                        <div className='dashboard-application-numbers4'>
                            <h5 className='dashboard-application-numbers-header '>
                                Numbers of Clients
                            </h5>
                            <div className='dashboard-application-numbers-body '>
                                <h3 className='dashboard-application-number-total-header'>
                                    4000
                                </h3>
                                <span className='dashboard-application-number-percentage'>
                                    1.00% (30days)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-lower-body'>
                    <div className='dashboard-user-details'>
                        <div className='dashboard-user-details-header'>
                            <h3>User Details</h3>
                            <p>
                                The total number of sessions within the date
                                range. It is the period time a user is active
                                engaged with your website, page or app etc
                            </p>
                        </div>
                        <div className='dashboard-user-details-indicator'>
                            <div className='dashboard-user-details-indicator-box'>
                                <h3>Job Values</h3>
                                <span>35K</span>
                            </div>
                            <div className='dashboard-user-details-indicator-box'>
                                <h3>Users</h3>
                                <span>2</span>
                            </div>
                            <div className='dashboard-user-details-indicator-box'>
                                <h3>Users</h3>
                                <span>71.65%</span>
                            </div>
                            <div className='dashboard-user-details-indicator-box'>
                                <h3>Job Posted</h3>
                                <span>5</span>
                            </div>
                        </div>
                        <DashboardUserGraph />
                    </div>

                    <div className='dashboard-jobs-details'>
                        <div className='dashboard-jobs-details-header'>
                            <h3>User Details</h3>
                            <p>
                                The total number of sessions within the date
                                range. It is the period time a user is active
                                engaged with your website, page or app etc
                            </p>
                        </div>
                        <div className='dashboard-jobs-details-indicator'>
                            <div className='dashboard-jobs-details-indicator-box dashboard-jobs-details-indicator-box-1'>
                                <span className='offline-span'></span>
                                <h3>Offline Job</h3>
                            </div>
                            <div className='dashboard-jobs-details-indicator-box dashboard-jobs-details-indicator-box-2'>
                                <span className='online-span'></span>
                                <h3>Online Job</h3>
                            </div>
                        </div>
                        <DashboardJobGraph />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;

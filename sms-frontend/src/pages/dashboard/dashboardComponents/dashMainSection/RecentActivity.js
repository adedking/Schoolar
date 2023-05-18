import React from 'react';
import { Link } from "react-router-dom";

const RecentActivity = () => {
    return (
        <div id="recent-updates">
            <div className="new-header">Recent Activities</div>
            <div className="update-info"><strong><Link to="/dashboard" className="update-info-link">Teacher: </Link></strong>Tade submitted Lesson Plan</div>
            <div className="update-info"><strong><Link to="/dashboard" className="update-info-link">Student: </Link></strong>Chinedu in JSS2 Paid Fees Of N150,000</div>
            <div className="update-info"><strong><Link to="/dashboard" className="update-info-link">Parent: </Link></strong>Mr Jude just erolled a new child in JSS 3</div>
            <div className="update-info"><strong><Link to="/dashboard" className="update-info-link">Student: </Link></strong>Chinedu in JSS2 Paid Fees Of N150,000</div>
            <div className="update-info"><strong><Link to="/dashboard" className="update-info-link">Teacher: </Link></strong>Tade submitted Lesson Plan</div>
            <div className="update-info"><strong><Link to="/dashboard" className="update-info-link">Student: </Link></strong>Chinedu in JSS2 Paid Fees Of N150,000</div>
        </div>
    );
};

export default RecentActivity;
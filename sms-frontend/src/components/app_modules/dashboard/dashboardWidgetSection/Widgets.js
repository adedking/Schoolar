import React from 'react';
import { FaUserFriends } from "react-icons/fa";

export const Widget = () => {
    return (
        <div className="widget">
            <div className="widget-left">
                <div id="widget-text">Student</div>
                <div id="widget-count">100</div>
            </div>
            <div className="widget-right">
                <FaUserFriends className="widget-icon" /> 
            </div>
        </div>
    );
};
export const Widget2 = () => {
    return (
        <div className="widget">
            <div className="widget-left">
                <div id="widget-text">Employees</div>
                <div id="widget-count">100</div>
            </div>
            <div className="widget-right">
                <FaUserFriends className="widget-icon" /> 
            </div>
        </div>
    );
};
export const Widget3 = () => {
    return (
        <div className="widget">
            <div className="widget-left">
                <div id="widget-text">Fund Balance</div>
                <div id="widget-count">NGN 6,000,000</div>
            </div>
            <div className="widget-right">
                <div className="widget-icon-money">₦</div>
            </div>
        </div>
    );
};
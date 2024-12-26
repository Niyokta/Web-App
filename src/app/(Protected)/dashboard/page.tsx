'use client'
import React from "react";
export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            <div className="stats">
                <div className="stat-item">
                    <h2>Users</h2>
                    <p>1,234</p>
                </div>
                <div className="stat-item">
                    <h2>Sales</h2>
                    <p>$12,345</p>
                </div>
                <div className="stat-item">
                    <h2>Performance</h2>
                    <p>89%</p>
                </div>
            </div>
            <div className="recent-activities">
                <h2>Recent Activities</h2>
                <ul>
                    <li>User John Doe signed up</li>
                    <li>Order #1234 was placed</li>
                    <li>Server maintenance completed</li>
                </ul>
            </div>
        </div>
    )
}
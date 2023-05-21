/** @format */

import React from "react";
import "./AdminDashboard.css";

const Card = ({ title, content, className }) => {
  return (
    <div className={`card ${className}`}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

const RecentJobSales = () => {
  return (
    <div className="recent-job-sales">
      <h2>Recent Job Sales</h2>
      <table className="job-sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Worker</th>
            <th>Skill</th>
            <th>Total Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-05-10</td>
            <td>Client A</td>
            <td>Worker X</td>
            <td>Skill 1</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>2023-05-09</td>
            <td>Client B</td>
            <td>Worker Y</td>
            <td>Skill 2</td>
            <td>$700</td>
          </tr>
          <tr>
            <td>2023-05-08</td>
            <td>Client C</td>
            <td>Worker Z</td>
            <td>Skill 3</td>
            <td>$400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const TopOfferedJobs = () => {
  const jobs = ["Carpenter", "Plumber", "Mason", "Welder", "Mechanic"];

  return (
    <div className="top-offered-jobs">
      <h2>Top Offered Jobs</h2>
      <ul className="jobs-list">
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="cardcontent">
        <div className="card1">
          <Card
            title="Total Users"
            content="This is the content of card 1."
            className="card-green"
          />
        </div>
        <div className="card2">
          <Card
            title="Offers"
            content="This is the content of card 2."
            className="card-yellow"
          />
        </div>
        <div className="card3">
          <Card
            title="Total Salary"
            content="This is the content of card 3."
            className="card-blue"
          />
        </div>
        <div className="card4">
          <Card
            title="Rejections"
            content="This is the content of card 4."
            className="card-red"
          />
        </div>
      </div>

      <RecentJobSales />
      <TopOfferedJobs />
    </div>
  );
};

export default AdminDashboard;

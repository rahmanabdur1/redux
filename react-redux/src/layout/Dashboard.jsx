import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
       Dashboard
       <Link to='/userlist'>User Lists</Link>
       <Link to='/addproduct'> Products Lists</Link>
       <div>
        <Outlet/>
       </div>
        </div>
    );
};

export default Dashboard;
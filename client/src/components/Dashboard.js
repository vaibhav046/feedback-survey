import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Dashboard</h1>
            <div><Search /></div>
            <div className="fixed-action-btn space-top1">
                <Link
                    style={{ position: 'absolute', bottom: '50px', right: '50px' }} to="/surveys/new" href="#" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div >
    );
}

export default Dashboard;
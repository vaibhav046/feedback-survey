import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Dashboard</h1>
            <div className="fixed-action-btn">
                <Link
                    style={{ position: 'absolute', bottom: '50px', right: '50px' }} to="/surveys/new" href="#" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div >
    );
}

export default Dashboard;
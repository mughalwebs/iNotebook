import React, { useContext } from 'react'
import getDetailsContext from '../Context/GetUserDetails/GetDetailsContext'
import { useLocation } from 'react-router-dom';

export default function UserDetails() {
    const detailsContext = useContext(getDetailsContext);
    const { userDetails, getDetails } = detailsContext;
    let location = useLocation();
    if (location.pathname === '/userDetails') {
        getDetails();
    }
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Account Created On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{userDetails.name}</td>
                        <td>{userDetails.email}</td>
                        <td>{(userDetails.date).substr(0, userDetails.date - 5)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
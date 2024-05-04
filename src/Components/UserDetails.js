import React, { useContext } from 'react'
import getDetailsContext from '../Context/GetUserDetails/GetDetailsContext'
import { useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

export default function UserDetails() {
    const detailsContext = useContext(getDetailsContext);
    const { userDetails, getDetails } = detailsContext;
    let location = useLocation();
    if (location.pathname === '/userDetails') {
        getDetails();
    }
    const year = new Date((userDetails.date).substr(0, userDetails.date.length - 5)).getFullYear().toString();
    const month = (new Date((userDetails.date).substr(0, userDetails.date.length - 5)).getMonth() + 1).toString();
    const day = new Date((userDetails.date).substr(0, userDetails.date.length - 5)).getDate().toString();
    const date = `${day > 9 ? day : `0${day}`}-${month > 9 ? month : `0${month}`}-${year}`
    const exportDetils = () => {
        const content = `Name: ${userDetails.name}\n\nEmail: ${userDetails.email}\n\nAccount Created On: ${date}`
        const blob = new Blob([content], { type: 'plain/text' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'userDetails.txt';
        link.click();
    }
    return (
        <div className='container remove-typing-cursor'>
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
                        <th scope="row">
                            <i className="fa-solid fa-square-caret-right"></i>
                        </th>
                        <td>{userDetails.name}</td>
                        <td>{userDetails.email}</td>
                        <td>{date}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-outline-primary float-end" data-tooltip-id='exportDetails' onClick={exportDetils}>
                <i className="fa-solid fa-file-export"></i>
            </button>
            <Tooltip id="exportDetails" effect="solid" place="bottom" arrow={true} content="Export Your Details." style={{
                color: 'white',
                backgroundColor: '#0D6EFD',
            }} />
        </div>
    )
}
import React, { useContext } from 'react'
import getDetailsContext from '../Context/GetUserDetails/GetDetailsContext'

export default function UserDetails() {
    const detailsContext = useContext(getDetailsContext);
    const { UserDetails, getDetails } = detailsContext;
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={getDetails}>
                Show Details
            </button>
        </>
    )
}
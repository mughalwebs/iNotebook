import React, { useContext } from 'react'
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext'

export default function Alert(props) {
    const alertContext = useContext(AlertVarsContext);
    const { alertStatus, alertMessage, alertMessageLoading } = alertContext;
    return (
        <div className={`alert alert-${alertStatus} d-flex align-items-center ${alertMessageLoading ? 'visible' : 'invisible'}`} role="alert">
            {alertStatus === 'primary' ? <i className="fa-solid fa-circle-info text-primary"></i> : alertStatus === 'success' ? <i class="fa-solid fa-circle-check text-success"></i> : alertStatus === 'danger' ? <i class="fa-solid fa-circle-exclamation text-danger"></i> : ''}
            &ensp;{alertMessage}
        </div>
    )
}
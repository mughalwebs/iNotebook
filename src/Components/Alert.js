import React, { useContext } from 'react'
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext'

export default function Alert(props) {
    const alertContext = useContext(AlertVarsContext);
    const { alertStatus, alertMessage, alertMessageLoading } = alertContext;
    return (
        <div className={`alert alert-${alertStatus} d-flex align-items-center ${alertMessageLoading ? 'visible' : 'invisible'} remove-typing-cursor`} role="alert">
            {alertStatus === 'primary' ? <i className="fa-solid fa-circle-info text-primary"></i> : alertStatus === 'success' ? <i className="fa-solid fa-circle-check text-success"></i> : alertStatus === 'danger' ? <i className="fa-solid fa-circle-exclamation text-danger"></i> : <i className="fa-solid fa-folder-minus"></i>}
            &ensp;{alertMessage}
        </div>
    )
}
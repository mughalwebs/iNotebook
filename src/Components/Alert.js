import React from 'react'

export default function Alert(props) {
    return (
        <>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                <i className="fa-solid fa-circle-info"></i>
                &ensp;{props.message}
            </div>
        </>
    )
}

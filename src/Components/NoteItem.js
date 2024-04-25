import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can mx-2"></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                    <h6 className="card-subtitle mb-2 text-body-secondary">#{note.tag}</h6>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

import React, { useContext } from 'react'
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext';
import { Tooltip } from 'react-tooltip';

export default function NoteItem(props) {
    const alertContext = useContext(AlertVarsContext);
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = alertContext;
    const { note, updateNote, deleteNote } = props;
    const deletingNote = () => {
        deleteNote(note._id);
        setAlertStatus('warning');
        setAlertMessage('Successfully Deleted the Note.');
        settingAlertMessageLoading();
    }
    return (
        <div className='col-lg-6 col-xl-4 my-2'>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title">{note.title}</h5>
                        <button data-tooltip-id='deleteNote' className='btn btn-outline-danger edit-and-delete move-to-left mx-2'>
                            <i className="fa-solid fa-trash-can" onClick={deletingNote}></i>
                        </button>
                        <button data-tooltip-id='updateNote' className='btn btn-outline-info edit-and-delete mx-2'>
                            <i className="fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
                        </button>
                    </div>
                    <h6 className="mb-2 text-body-secondary decrease-font-size">#{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
            <Tooltip id="deleteNote" place="top" effect="solid" content="Are You Sure You want to Delete it ?" style={{
                color: 'white',
                backgroundColor: 'red',
                borderRadius: '5px',
            }} />
            <Tooltip id="updateNote" place="top" effect="solid" content="Edit Your Note" style={{
                color: 'black',
                backgroundColor: '#0DCAF0',
                borderRadius: '5px',
            }} />
        </div>
    )
}

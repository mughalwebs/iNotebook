import React, { useContext } from 'react'
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext';

export default function NoteItem(props) {
    const alertContext = useContext(AlertVarsContext);
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = alertContext;
    const { note, updateNote, deleteNote } = props;
    const deletingNote = () => {
        deleteNote(note._id);
        setAlertStatus('danger');
        setAlertMessage('Successfully Deleted the Note.');
        settingAlertMessageLoading();
    }
    return (
        <div className='col-lg-4 col-md-6 my-2'>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can edit-and-delete move-to-left mx-2" onClick={deletingNote}></i>
                        <i className="fa-solid fa-pen-to-square edit-and-delete mx-2 " onClick={() => { updateNote(note) }}></i>
                    </div>
                    <h6 className="mb-2 text-body-secondary decrease-font-size">#{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

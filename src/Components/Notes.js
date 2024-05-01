import React, { useEffect, useContext, useRef, useState } from 'react'
import NotesContext from '../Context/Notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext';

export default function Notes() {
    const alertContext = useContext(AlertVarsContext);
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = alertContext;
    let notesContext = useContext(NotesContext);
    const [note, setNote] = useState({ id: '', eTitle: "", eDescription: '', eTag: '' })
    const { notes, getNote, deleteNote, updateNote } = notesContext;
    useEffect(() => {
        getNote();
        // eslint-disable-next-line
    }, [notes])
    const ref = useRef(null);
    const refClose = useRef(null);
    const updatingNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, eTitle: currentNote.title, eDescription: currentNote.description, eTag: currentNote.tag });
    }
    const handleClick = (e) => {
        e.preventDefault();
        updateNote(note.id, note.eTitle, note.eDescription, note.eTag);
        refClose.current.click();
        setAlertStatus('primary');
        setAlertMessage('Successfully Edited the Note.');
        settingAlertMessageLoading();
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />
            <button type="button" className="d-none btn btn-primary" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="eTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="eTitle" name='eTitle' aria-describedby="emailHelp" onChange={onChange} value={note.eTitle} />
                                    <div id="emailHelp" className={`ms-1 ${note.eDescription.length >= 5 ? 'invisible' : 'visible'}`}>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        &ensp;Title must Contains at least 5 characters.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eDescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="eDescription" name="eDescription" onChange={onChange} value={note.eDescription} />
                                    <div id="emailHelp" className={`ms-1 ${note.eDescription.length >= 5 ? 'invisible' : 'visible'}`}>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        &ensp;Description must Contains at least 5 characters.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eTag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="eTag" name="eTag" onChange={onChange} value={note.eTag} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.eTitle.length >= 3 && note.eDescription.length >= 5 ? false : true}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2>Your Notes</h2>
                <div className="container">
                    {notes && notes.length === 0 && <h6 className='ms-3'>No Notes Found</h6>}
                </div>
                {notes.map((note) => {
                    return (
                        <NoteItem key={note._id} note={note} updateNote={updatingNote} deleteNote={deleteNote} />
                    )
                })}
            </div>
        </>
    )
}

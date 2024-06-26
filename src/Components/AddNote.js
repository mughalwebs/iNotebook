import React, { useContext, useState } from 'react'
import NotesContext from '../Context/Notes/NoteContext'
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext';
import { Tooltip } from 'react-tooltip';

export default function AddNote() {
    const alertContext = useContext(AlertVarsContext);
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = alertContext;
    let notesContext = useContext(NotesContext);
    const { createNote } = notesContext;
    const [note, setNote] = useState({ title: "", description: '', tag: '' })
    const createANewNote = (e) => {
        e.preventDefault();
        createNote(note.title, note.description, note.tag);
        setAlertStatus('success');
        setAlertMessage('Successfully Created a Note.');
        settingAlertMessageLoading();
        setNote({ title: "", description: '', tag: '' });
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 className='my-2 remove-typing-cursor'>Add a Note</h2>
            <form className='my-3'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control remove-typing-cursor" id="title" placeholder="My Note" name='title' aria-describedby="emailHelp" onChange={onChange} minLength={3} required value={note.title} />
                    <label htmlFor="title" className='remove-typing-cursor'>Title</label>
                    {note.title.length >= 3 ? <div id="emailHelp" className="form-text ms-1 text-success remove-typing-cursor">
                        &ensp;Title <i className="fa-solid fa-circle-check"></i>
                    </div> :
                        <div id="emailHelp" className="form-text ms-1 text-danger remove-typing-cursor">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            &ensp;Title must Contains at least 3 characters.
                        </div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control remove-typing-cursor" id="description" placeholder="My Description" name='description' onChange={onChange} minLength={5} required value={note.description} />
                    <label htmlFor="title" className='remove-typing-cursor'>Description</label>
                    {note.description.length >= 5 ? <div id="emailHelp" className="form-text ms-1 text-success remove-typing-cursor">
                        &ensp;Decription <i className="fa-solid fa-circle-check"></i>
                    </div> :
                        <div id="emailHelp" className="form-text ms-1 text-danger remove-typing-cursor">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            &ensp;Description must Contains at least 5 characters.
                        </div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control mb-2 remove-typing-cursor" id="tag" placeholder="My Tag" name='tag' onChange={onChange} minLength={3} required value={note.tag} />
                    <label htmlFor="title" className='remove-typing-cursor'>Tag</label>
                </div>
                <button data-tooltip-id='addNote' type="submit" className="btn btn-outline-primary" onClick={createANewNote} disabled={note.title.length >= 3 && note.description.length >= 5 ? false : true}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <Tooltip id='addNote' place='right' content='Add Note' style={{
                    color: 'white',
                    backgroundColor: '#0D6EFD',
                    borderRadius: '5px',
                }} />
            </form>
        </>
    )
}
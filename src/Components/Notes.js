import React, { useEffect, useContext } from 'react'
import NotesContext from '../Context/Notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {
    let notesContext = useContext(NotesContext);
    const { notes, createNote, getNote, updateNote, deleteNote } = notesContext;
    useEffect(() => {
        getNote();
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
        <AddNote />
            <div className='row'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return (
                        <NoteItem key={note._id} note={note} createNote={createNote} updateNote={updateNote} deleteNote={deleteNote} />
                    )
                })}
            </div>
        </>
    )
}

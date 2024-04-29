import React, { useContext } from 'react'
import NotesContext from '../Context/Notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {
    let notesContext = useContext(NotesContext);
    const { notes, createNote, updateNote, deleteNote } = notesContext;
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

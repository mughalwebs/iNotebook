import React, { useContext } from 'react'
import NotesContext from '../Context/Notes/NoteContext'
import NoteItem from './NoteItem';

export default function Notes() {
    let notesContext = useContext(NotesContext);
    const { notes } = notesContext;
    return (
        <>
            <div className='row'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return (
                        <NoteItem key={note._id} note={note} />
                    )
                })}
            </div>
        </>
    )
}

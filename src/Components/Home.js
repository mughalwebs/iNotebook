import React, { useContext } from 'react'
import NotesContext from '../Context/Notes/NoteContext'

export default function Home() {
    let notesContext = useContext(NotesContext);
    const { notes, setNotes } = notesContext;
    return (
        <>
            <h2 className='my-2'>Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h2 className='my-2'>Your Notes</h2>
            {notes.map((note) => {
                return (
                    <>
                        <h4>{1 + ". " + note.title}</h4>
                        <p>Description : {note.description}</p>
                        <pre>Tag : {note.tag}</pre>
                        <pre>Saved on : {new Date(note.date).getDate().toString() + "/" + new Date(note.date).getMonth().toString() + "/" + new Date(note.date).getFullYear().toString()}</pre>
                    </>
                )
            })}
        </>
    )
}
import React, { useContext, useState } from 'react'
import NotesContext from '../Context/Notes/NoteContext'

export default function AddNote() {
    let notesContext = useContext(NotesContext);
    const { createNote } = notesContext;
    const [note, setNote] = useState({ title: "", description: '', tag: '' })
    const createANewNote = () => {

    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <h2 className='my-2'>Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={createANewNote}>Submit</button>
            </form>
        </>
    )
}

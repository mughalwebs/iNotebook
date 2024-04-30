import { useState } from 'react';
import NoteContext from './NoteContext';
let host = 'http://localhost:5000'
const NoteState = (props) => {
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes)
    // Create a Note - C
    const createNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addingNotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjllMWMyOGRiNDkyNzFkZjY3YWIxIn0sImlhdCI6MTcxNDM5NjcwMH0.pSJ8UTRDmAsX1b4-rYmfFjVISmJFmV_y6OR9gGMM_6I"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        const note = {
            "_id": "66291b0a44b82099303c3b855",
            "user": "66291ace44b82099303c3b88",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-04-24T14:45:30.813Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Reading is from webpage - R
    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: 'GET',
            headers: {
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjllMWMyOGRiNDkyNzFkZjY3YWIxIn0sImlhdCI6MTcxNDM5NjcwMH0.pSJ8UTRDmAsX1b4-rYmfFjVISmJFmV_y6OR9gGMM_6I"
            },
        });
        const json = await response.json();
        setNotes(json);
    }
    // Update a Note - U
    const updateNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjllMWMyOGRiNDkyNzFkZjY3YWIxIn0sImlhdCI6MTcxNDM5NjcwMH0.pSJ8UTRDmAsX1b4-rYmfFjVISmJFmV_y6OR9gGMM_6I"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        notes.forEach((note) => {
            if (notes._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
        })
    }
    // Delete a Note - D
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/api/notes/deleteNotes/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjllMWMyOGRiNDkyNzFkZjY3YWIxIn0sImlhdCI6MTcxNDM5NjcwMH0.pSJ8UTRDmAsX1b4-rYmfFjVISmJFmV_y6OR9gGMM_6I"
            }
        });
        console.log(response)
    }
    return (
        <NoteContext.Provider value={{ notes, createNote, updateNote, deleteNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
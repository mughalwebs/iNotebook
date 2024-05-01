import { useState } from 'react';
import NoteContext from './NoteContext';
let host = 'http://localhost:5000'
const NoteState = (props) => {
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes);
    // Create a Note - C
    const createNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addingNotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjEzNTMzZjZmYTVjMDU4Njk2YzA3In0sImlhdCI6MTcxNDU1Nzc3OX0.3vmcuvH6UKSnyp9dcHglLdfPFHi_k7a9i5e5eseKg0I"
            },
            body: JSON.stringify({ title: title, description: description, tag: tag })
        });
        const json = await response.json();
        const note = {
            "_id": json._id,
            "user": json.user,
            "title": title,
            "description": description,
            "tag": tag,
            "date": json.date,
            "__v": json.__v
        }
        setNotes(notes.concat(note))
    }
    // Reading is from webpage - R
    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: 'GET',
            headers: {
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjEzNTMzZjZmYTVjMDU4Njk2YzA3In0sImlhdCI6MTcxNDU1Nzc3OX0.3vmcuvH6UKSnyp9dcHglLdfPFHi_k7a9i5e5eseKg0I"
            },
        });
        const json = await response.json();
        setNotes(json);
    }
    // Update a Note - U
    const updateNote = async (id, title, description, tag) => {
        await fetch(`${host}/api/notes/updateNotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjEzNTMzZjZmYTVjMDU4Njk2YzA3In0sImlhdCI6MTcxNDU1Nzc3OX0.3vmcuvH6UKSnyp9dcHglLdfPFHi_k7a9i5e5eseKg0I"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                tag: tag
            })
        });
        notes.forEach((note) => {
            if (notes._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
        })
        setNotes(notes);
    }
    // Delete a Note - D
    const deleteNote = async (id) => {
        fetch(`${host}/api/notes/deleteNotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjEzNTMzZjZmYTVjMDU4Njk2YzA3In0sImlhdCI6MTcxNDU1Nzc3OX0.3vmcuvH6UKSnyp9dcHglLdfPFHi_k7a9i5e5eseKg0I"
            }
        });
        setNotes(notes.filter((note) => {
            return note !== id;
        }));
    }
    return (
        <NoteContext.Provider value={{ notes, createNote, updateNote, deleteNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
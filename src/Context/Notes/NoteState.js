import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
    const initialNotes = [
            {
                "_id": "66291ae044b82099303c3b88a",
                "user": "66291ace44b82099303c3b88",
                "title": "My Name",
                "description": "My name is Hamid Raza Mughal.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:44:48.920Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b85c",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b845c",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b8c1",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b8c0",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b81",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b84",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b85",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            },
        ]
        const [notes, setNotes] = useState(initialNotes)
        // Create a Note - C
        const createNote = (title, description, tag) => {
            console.log('Add Note Successfully.')
            const note = {
                "_id": "66291b0a44b82099303c3b855",
                "user": "66291ace44b82099303c3b88",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            }
            setNotes(notes.concat((note)))
        }
        // Reading is from webpage - R
        // Update a Note - U
        const updateNote = (id) => {
            console.log("Update Note");
        }
        // Delete a Note - D
        const deleteNote = (id) => {
            console.log("Delete Note");
        }
    return (
        <NoteContext.Provider value={{ notes, createNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
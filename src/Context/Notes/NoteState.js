import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
    const initialNotes = [
            {
                "_id": "66291ae044b82099303c3b8a",
                "user": "66291ace44b82099303c3b88",
                "title": "My Name",
                "description": "My name is Hamid Raza Mughal.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:44:48.920Z",
                "__v": 0
            },
            {
                "_id": "66291b0a44b82099303c3b8c",
                "user": "66291ace44b82099303c3b88",
                "title": "My Class",
                "description": "I read in Pre Ist Year.",
                "tag": "Personal Information",
                "date": "2024-04-24T14:45:30.813Z",
                "__v": 0
            }
        ]
        const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
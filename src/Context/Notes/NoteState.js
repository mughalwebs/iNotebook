import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
    const [state, setState] = useState({
        "name": "Hamid Raza",
        "class": "Pre I.C.S",
    });
    const changingClass = () => {
        setInterval(() => {
            setState({
                class: Math.floor(Math.random() * 12)
            })
        }, 1500)
    }
    return (
        <NoteContext.Provider value={{state, changingClass}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
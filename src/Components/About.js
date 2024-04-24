import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext';
import { useEffect } from 'react';

export default function About() {
    const a = useContext(NoteContext);
    useEffect(() => {
        a.changingClass();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <h1>Hello {a.state.name} from About.js</h1>
            You are in {a.state.class} Class.
        </>
    )
}   
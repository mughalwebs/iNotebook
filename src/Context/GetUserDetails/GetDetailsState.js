import { useState } from "react";
import getDetailsContext from "./GetDetailsContext";

const GetDetailsState = (props) => {
    let host = 'http://localhost:5000';
    const [userDetails, setUserDetails] = useState({ name: '', email: '', date: '' })
    const getDetails = async () => {
        const response = await fetch(`${host}/api/auth/getUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ id: localStorage.getItem('id') })
        })
        const json = await response.json();
        setUserDetails(json);
        console.log(userDetails);
    }
    return (
        <getDetailsContext.Provider value={{ userDetails, getDetails }}>
            {props.children}
        </getDetailsContext.Provider>
    )
}

export default GetDetailsState;
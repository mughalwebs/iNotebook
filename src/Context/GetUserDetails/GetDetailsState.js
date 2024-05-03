import { useState } from "react";
import GetDetailsContext from "./GetDetailsContext";

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
        setUserDetails({name: json.name, email: json.email, date: json.date});
    }
    return (
        <GetDetailsContext.Provider value={{ userDetails, getDetails }}>
            {props.children}
        </GetDetailsContext.Provider>
    )
}

export default GetDetailsState;
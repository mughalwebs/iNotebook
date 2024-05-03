import { useContext } from "react";
import SignupContext from "./SignupContext";
import { useNavigate } from "react-router-dom";
import AlertVarsContext from "../AlertVariables/AlertVarsContext";

let host = 'http://localhost:5000';

const SignupState = (props) => {
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = useContext(AlertVarsContext);
    const navigation = useNavigate();
    const SignupUser = async (name, email, password) => {
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('id', json._id);
            localStorage.setItem('token', json.authToken);
            setAlertStatus('success');
            setAlertMessage('Successfully Created an Account.');
            settingAlertMessageLoading();
            navigation('/');
        } else {
            setAlertStatus('danger');
            setAlertMessage('Please Enter Valid Credentials.');
            settingAlertMessageLoading();
        }
    }
    return (
        <SignupContext.Provider value={{ SignupUser }}>
            {props.children}
        </SignupContext.Provider>
    )
}

export default SignupState
import { useContext } from "react";
import LoginContext from "./LoginContext";
import { useNavigate } from "react-router-dom";
import AlertVarsContext from "../AlertVariables/AlertVarsContext";

let host = 'http://localhost:5000'

const LoginState = (props) => {
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = useContext(AlertVarsContext);
    const navigation = useNavigate();
    const LoginUser = async (email, password) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            setAlertStatus('success');
            setAlertMessage('Successfully Logged into iNotebook.');
            settingAlertMessageLoading();
            navigation('/');
        } else {
            setAlertStatus('danger');
            setAlertMessage('Please Enter Valid Credentials.');
            settingAlertMessageLoading();
        }
    }
    return (
        <LoginContext.Provider value={{ LoginUser }}>
            {props.children}
        </LoginContext.Provider>
    )
}
export default LoginState;
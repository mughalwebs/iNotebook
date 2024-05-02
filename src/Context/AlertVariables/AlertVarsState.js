import { useState } from "react";
import AlertVarsContext from "./AlertVarsContext";
const AlertVarsState = (props) => {
    const [alertStatus, setAlertStatus] = useState('primary');
    const [alertMessage, setAlertMessage] = useState('Alert Message');
    const [alertMessageLoading, setAlertMessageLoading] = useState(false);
    const settingAlertMessageLoading = () => {
        setAlertMessageLoading(true);
        setTimeout(() => {
            setAlertMessageLoading(false);
        }, 2000);
    }
    return (
        <AlertVarsContext.Provider value={{ alertStatus, setAlertStatus, alertMessage, setAlertMessage, alertMessageLoading, settingAlertMessageLoading }}>
            {props.children}
        </AlertVarsContext.Provider>
    )
}
export default AlertVarsState;
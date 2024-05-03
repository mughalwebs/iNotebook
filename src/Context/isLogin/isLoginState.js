import React, { useState } from "react";
import isLoginContext from "./isLoginContext";

const IsLoginState = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
            {props.children}
        </isLoginContext.Provider>
    );
}

export default IsLoginState;
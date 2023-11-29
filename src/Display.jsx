import { useContext } from "react";
import { UseMyContext } from "./ContextProvider";
const Display = () => {
    const {value, authState} = UseMyContext();
    console.log(value)
    console.log(authState)

    
    return (
        authState ? <p>Value: {value}</p> : <p>Not authorised.</p>
    )
}

export default Display
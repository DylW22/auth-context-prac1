import { useContext, createContext } from "react"
import GetAuth from "./GetAuth";
const MyContext = createContext();

export const UseMyContext = () => {
    return useContext(MyContext)
}

const ContextProvider = ({children, value}) => {
    const toPass = {
        value: value,
        authState: GetAuth()
    }

    return (
        <MyContext.Provider value={toPass}>
            {children}
        </MyContext.Provider>
    )

}

export default ContextProvider
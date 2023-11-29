import { useState } from "react"
import Display from "./Display"
import ContextProvider from './ContextProvider'

const MyParentClass = () => {
    const [value, setValue] = useState(0)



    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center m-4">
                <button
                className="bg-blue-500 hover:bg-blue-300 rounded-md text-white hover:text-red-300 mx-2 px-4 py-2 font-bold"
                onClick={()=>setValue(prevValue => prevValue + 1)}>Increment</button>
                <button
                className="bg-blue-500 hover:bg-blue-300 rounded-md text-white hover:text-red-300 mx-2 px-4 py-2 font-bold"
                onClick={()=>setValue(prevValue => prevValue - 1)}>Decrement</button>
                <button
                className="bg-blue-500 hover:bg-blue-300 rounded-md text-white hover:text-red-300 mx-2 px-4 py-2 font-bold"
                onClick={()=>setValue(0)}>Reset</button>
            </div>
            <ContextProvider value={value}>
                <Display/>
            </ContextProvider>
            <p>My value is: {value}</p>
        </div>
    )
}

export default MyParentClass;
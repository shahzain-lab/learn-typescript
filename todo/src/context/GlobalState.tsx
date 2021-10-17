import { createContext, ReactNode, useState } from "react";


interface Props {
    children: ReactNode
}

export interface Person {
    id: number,
    name: string,
    age: number
}

interface AppContext {
    persons: Person[],
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>
}


export const GlobalData = createContext<AppContext>({} as AppContext);

export const GlobalProvider = ({ children }: Props) => {

    const [persons, setPersons] = useState<Person[]>([]);

    return (
        <GlobalData.Provider value={{ persons, setPersons }}>
            {children}
        </GlobalData.Provider >
    )
}
import React, { useContext, useState } from 'react'
import { GlobalData } from '../context/GlobalState';

function UserData() {
    const [name, setName] = useState<string>();
    const [age, setAge] = useState<number>();
    const { persons, setPersons } = useContext(GlobalData)

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();

        const addPerson = {
            id: new Date().getTime(),
            name,
            age
        }
        setPersons()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>name</label>
                <input
                    type="text"
                    placeholder="types ..."
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <label>age</label>
                <input
                    type="number"
                    placeholder="types ..."
                    value={age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                />

                <button>Submit</button>
            </form>

        </div>
    )
}

export default UserData

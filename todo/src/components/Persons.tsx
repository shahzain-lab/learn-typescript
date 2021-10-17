import React, { useContext } from 'react';
import { GlobalData } from '../context/GlobalState';


const Persons = () => {
    const { persons } = useContext(GlobalData);

    return (
        <>
            {
                persons.map(ele => (
                    <ul key={ele.id}>
                        <li>{ele.name}</li>
                        <li>{ele.age}</li>
                    </ul>
                ))
            }
        </>
    )
}

export default Persons;
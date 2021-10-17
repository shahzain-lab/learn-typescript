import React, { useContext } from 'react';
import { GlobalData } from '../context/GlobalState';
import './style.css'


const Persons = () => {
    const { persons } = useContext(GlobalData);

    return (
        <>
            {
                persons.map(ele => (
                    <ul key={ele.id}>
                        <li>{ele.name}<b>{ele.age}</b></li>
                    </ul>
                ))
            }
        </>
    )
}

export default Persons;
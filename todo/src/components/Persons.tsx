import React from 'react'

type Props = {
    name: string,
    children: JSX.Element
}

const Persons = ({ name, children }: Props): JSX.Element => {
    return (
        <div>
            <h1>HEllo {name}</h1>
            <h3>{children}</h3>
        </div>
    )
}

export default Persons;
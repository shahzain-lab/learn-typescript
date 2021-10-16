import React, { useState } from 'react'

function UserData() {
    const [description, setDescription] = useState<string>('');

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Description</label>
                <input
                    type="text"
                    placeholder="types ..."
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UserData

"use client"

import './OtherItem.css'

type OtherProperties = {
    userId: string;
    name: string;
    type: string;
    state: string;
    removeOtherItem: (userId: string, plate: string) => void;
    updateOtherItem: (userId: string, plate: string, location: string, data: any) => void
}

export function OtherItem({ userId, name, type, state, removeOtherItem, updateOtherItem }: OtherProperties) {
    let newName = name
    let newType = type
    let newState = state

    return <div className='OtherItem'>
        <div className='OtherItemDetail'>
            <h2>Name:</h2>
            <input type="text" placeholder={name} onChange={e => { newName = e.target.value }} />
        </div>
        <div className='OtherItemDetail'>
            <h2>Type:</h2>
            <input type="text" placeholder={type} onChange={e => { newType = e.target.value }} />
        </div>
        <div className='OtherItemDetail'>
            <h2>State:</h2>
            <input type="text" placeholder={state} onChange={e => { newState = e.target.value }} />
        </div>
        <div className='OtherItemButtons'>
            <button onClick={e => {
                if (newName != name) { updateOtherItem(userId, name, 'address', newName) }
                if (newType != type) { updateOtherItem(userId, name, 'type', newType) }
                if (newState != state) { updateOtherItem(userId, name, 'state', newState) }
            }}>Update</button>
            <button onClick={e => {
                removeOtherItem(userId, name)
            }}>Delete</button>
        </div>
    </div>
}
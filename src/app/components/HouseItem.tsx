"use client"

import './HouseItem.css'

type HouseProperties = {
    userId: string;
    address: string;
    type: string;
    salePrice: number;
    garage: boolean
    removeHouseItem: (userId: string, plate: string) => void;
    updateHouseItem: (userId: string, plate: string, location: string, data: any) => void
}

export function HouseItem({ userId, address, type, salePrice, garage, removeHouseItem, updateHouseItem }: HouseProperties) {
    let newAddress = address
    let newType = type
    let newSalePrice = salePrice
    let newGarage = garage

    return <div className='HouseItem'>
        <div className='HouseItemDetail'>
            <h2>Address:</h2>
            <input type="text" placeholder={address} onChange={e => { newAddress = e.target.value }} />
        </div>
        <div className='HouseItemDetail'>
            <h2>Type:</h2>
            <input type="text" placeholder={type} onChange={e => { newType = e.target.value }} />
        </div>
        <div className='HouseItemDetail'>
            <h2>Sale Price:</h2>
            <input type="text" placeholder={salePrice.toString()} onChange={e => { newSalePrice = parseInt(e.target.value) }} />
        </div>
        <div className='HouseItemDetail'>
            <h2>Garage:</h2>
            <input type="text" placeholder={garage.toString()} onChange={e => {
                let hasGarage = false
                if (e.target.value == 'true') { hasGarage = true }
                newGarage = hasGarage
            }} />
        </div>
        <div className='HouseItemButtons'>
            <button onClick={e => {
                if (newAddress != address) { updateHouseItem(userId, address, 'address', newAddress) }
                if (newType != type) { updateHouseItem(userId, address, 'type', newType) }
                if (newSalePrice != salePrice) { updateHouseItem(userId, address, 'salePrice', newSalePrice) }
                if (newGarage != garage) { updateHouseItem(userId, address, 'garage', newGarage) }
            }}>Update</button>
            <button onClick={e => {
                removeHouseItem(userId, address)
            }}>Delete</button>
        </div>
    </div>
}
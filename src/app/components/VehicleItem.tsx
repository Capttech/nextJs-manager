"use client"

import './VehicleItem.css'

type VehicleProperties = {
    userId: string;
    plate: string;
    model: string;
    color: string;
    year: number;
    millage: number;
    removeVehicleItem: (userId: string, plate: string) => void;
    updateVehicleItem: (userId: string, plate: string, location: string, data: any) => void
}

export function VehicleItem({ userId, plate, model, color, year, millage, removeVehicleItem, updateVehicleItem }: VehicleProperties) {
    let newPlate = plate
    let newModel = model
    let newColor = color
    let newYear = year
    let newMillage = millage

    return <div className='vehicleItem'>
        <div className='vehicleItemDetail'>
            <h2>Plate Number:</h2>
            <input type="text" placeholder={plate} onChange={e => { newPlate = e.target.value }} />
        </div>
        <div className='vehicleItemDetail'>
            <h2>Model:</h2>
            <input type="text" placeholder={model} onChange={e => { newModel = e.target.value }} />
        </div>
        <div className='vehicleItemDetail'>
            <h2>Color:</h2>
            <input type="text" placeholder={color} onChange={e => { newColor = e.target.value }} />
        </div>
        <div className='vehicleItemDetail'>
            <h2>Year:</h2>
            <input type="text" placeholder={year.toString()} onChange={e => { newYear = parseInt(e.target.value) }} />
        </div>
        <div className='vehicleItemDetail'>
            <h2>Millage:</h2>
            <input type="text" placeholder={millage.toString()} onChange={e => { newMillage = parseInt(e.target.value) }} />
        </div>
        <div className='vehicleItemButtons'>
            <button onClick={e => {
                if (newPlate != plate) { updateVehicleItem(userId, plate, 'plate', newPlate) }
                if (newModel != model) { updateVehicleItem(userId, plate, 'model', newModel) }
                if (newColor != color) { updateVehicleItem(userId, plate, 'color', newColor) }
                if (newYear != year) { updateVehicleItem(userId, plate, 'year', newYear) }
                if (newMillage != millage) { updateVehicleItem(userId, plate, 'millage', millage) }
            }}>Update</button>
            <button onClick={e => {
                removeVehicleItem(userId, plate)
            }}>Delete</button>
        </div>
    </div>
}
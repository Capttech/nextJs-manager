import Link from "next/link";
import { it } from "node:test";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import exp from "constants";
import './page.css'

async function createVehicle(data: FormData) {
    "use server"

    const plate = data.get('plate')?.valueOf()
    if (typeof plate != 'string' || plate.length === 0) {
        throw new Error('Invalid Plate Number')
    }

    const model = data.get('model')?.valueOf()
    if (typeof model != 'string' || model.length === 0) {
        throw new Error('Invalid Model Number')
    }

    const color = data.get('color')?.valueOf()
    if (typeof color != 'string' || color.length === 0) {
        throw new Error('Invalid Color')
    }

    const year = data.get('year')?.valueOf()
    if (typeof year != 'string' || year.length === 0) {
        throw new Error('Invalid Year')
    }

    const millage = data.get('millage')?.valueOf()
    if (typeof millage != 'string' || millage.length === 0) {
        throw new Error('Invalid Millage')
    }

    await prisma.userVehicles.create({ data: { userId: 'user', plate: plate, model: model, color: color, year: parseInt(year), millage: parseInt(millage) } })

    redirect('/')
}

export default async function addPage() {
    return <>
        <h1 className="pageTitle">Create New Vehicle</h1>
        <form className="pageForm" action={createVehicle}>
            <div>
                <label className="pageFormLabel" htmlFor="newPlate">Plate Number</label>
                <input name="plate" id="newPlate" type="text" placeholder="XXXXXXXX" />
            </div>
            <div>
                <label htmlFor="newModel">Model</label>
                <input name="model" id="newModel" type="text" placeholder="XXXXXXXX" />
            </div>
            <div>
                <label htmlFor="newColor">Color</label>
                <input name="color" id="newColor" type="text" placeholder="XXXXXXXX" />
            </div>
            <div>
                <label htmlFor="newYear">Year</label>
                <input name="year" id="newYear" type="text" placeholder="XXXXXXXX" />
            </div>
            <div>
                <label htmlFor="newMillage">Millage</label>
                <input name="millage" id="newMillage" type="text" placeholder="XXXXXXXX" />
            </div>
            <button type="submit" className="submitButton">Submit</button>
        </form>
    </>
}
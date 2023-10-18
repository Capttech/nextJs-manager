import Link from "next/link";
import { it } from "node:test";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import exp from "constants";
import './page.css'

async function createHouse(data: FormData) {
    "use server"

    const address = data.get('address')?.valueOf()
    if (typeof address != 'string' || address.length === 0) {
        throw new Error('Invalid Address')
    }

    const type = data.get('type')?.valueOf()
    if (typeof type != 'string' || type.length === 0) {
        throw new Error('Invalid Type')
    }

    const price = data.get('price')?.valueOf()
    if (typeof price != 'string' || price.length === 0) {
        throw new Error('Invalid Price')
    }

    const garage = data.get('garage')?.valueOf()
    if (typeof garage != 'string' || garage.length === 0) {
        throw new Error('Invalid Garage State')
    }

    let garageState = false
    if (garage == 'yes') {
        garageState = true
    }

    await prisma.userHouses.create({ data: { userId: 'user', address: address, type: type, salePrice: parseInt(price), garage: garageState } })

    redirect('/')
}

export default async function addPage() {
    return <>
        <h1 className="pageTitle">Create New House</h1>
        <form className="pageForm" action={createHouse}>
            <div>
                <label className="pageFormLabel" htmlFor="newPlate">Address</label>
                <input name="address" id="newPlate" type="text" placeholder="Patrol dr" />
            </div>
            <div>
                <label htmlFor="newType">Type</label>
                <input name="type" id="newType" type="text" placeholder="Normal" />
            </div>
            <div>
                <label htmlFor="newPrice">Sale Price</label>
                <input name="price" id="newPrice" type="text" placeholder="100" />
            </div>
            <div>
                <label htmlFor="newGarage">Garage</label>
                <input name="garage" id="newGarage" type="text" placeholder="Yes/No" />
            </div>
            <button type="submit" className="submitButton">Submit</button>
        </form>
    </>
}
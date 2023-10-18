import Link from "next/link";
import { it } from "node:test";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import exp from "constants";
import './page.css'

async function createVehicle(data: FormData) {
    "use server"

    const name = data.get('name')?.valueOf()
    if (typeof name != 'string' || name.length === 0) {
        throw new Error('Invalid Name')
    }

    const type = data.get('type')?.valueOf()
    if (typeof type != 'string' || type.length === 0) {
        throw new Error('Invalid Type')
    }

    const state = data.get('state')?.valueOf()
    if (typeof state != 'string' || state.length === 0) {
        throw new Error('Invalid State')
    }

    await prisma.userOther.create({ data: { userId: 'user', name: name, type: type, state: state } })

    redirect('/')
}

export default async function addPage() {
    return <>
        <h1 className="pageTitle">Create New Item</h1>
        <form className="pageForm" action={createVehicle}>
            <div>
                <label className="pageFormLabel" htmlFor="newPlate">Name</label>
                <input name="name" id="newPlate" type="text" placeholder="lawn mower" />
            </div>
            <div>
                <label htmlFor="newType">Type</label>
                <input name="type" id="newType" type="text" placeholder="lawn care" />
            </div>
            <div>
                <label htmlFor="newPrice">State</label>
                <input name="state" id="newPrice" type="text" placeholder="in possession" />
            </div>
            <button type="submit" className="submitButton">Submit</button>
        </form>
    </>
}
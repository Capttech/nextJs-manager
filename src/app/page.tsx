import { prisma } from './db'
import './home.css'
import { VehicleItem } from "./components/VehicleItem";
import { HouseItem } from "./components/HouseItem";
import { OtherItem } from "./components/OtherItem";
import Link from 'next/link';
import { redirect } from "next/navigation";


/**
 * Delete user vehicle
 * @param userId 
 * @param plate 
 */
async function deleteUserVehicle(userId: string, plate: string) {
    'use server'

    await prisma.userVehicles.delete({ where: { userId, plate } })
    redirect('./')
}


/**
 * Delete user house
 * @param userId 
 * @param plate 
 */
async function deleteUserHouse(userId: string, address: string) {
    'use server'

    await prisma.userHouses.delete({ where: { userId, address } })
    redirect('./')
}


/**
 * Delete user other
 * @param userId 
 * @param plate 
 */
async function deleteUserOther(userId: string, name: string) {
    'use server'

    await prisma.userOther.delete({ where: { userId, name } })
    redirect('./')
}


/**
 * Update current vehicle
 * @param userId 
 * @param plate 
 * @param location 
 * @param data 
 */
async function updateUserVehicle(userId: string, plate: string, location: string, data: any) {
    'use server'

    if (location == 'plate') { await prisma.userVehicles.update({ where: { userId, plate }, data: { plate: data } }) }
    if (location == 'model') { await prisma.userVehicles.update({ where: { userId, plate }, data: { model: data } }) }
    if (location == 'color') { await prisma.userVehicles.update({ where: { userId, plate }, data: { color: data } }) }
    if (location == 'year') { await prisma.userVehicles.update({ where: { userId, plate }, data: { year: data } }) }
    if (location == 'millage') { await prisma.userVehicles.update({ where: { userId, plate }, data: { millage: data } }) }
    redirect('./')
}


/**
 * Update current house
 * @param userId 
 * @param plate 
 * @param location 
 * @param data 
 */
async function updateUserHouse(userId: string, address: string, location: string, data: any) {
    'use server'

    if (location == 'address') { await prisma.userHouses.update({ where: { userId, address }, data: { address: data } }) }
    if (location == 'type') { await prisma.userHouses.update({ where: { userId, address }, data: { type: data } }) }
    if (location == 'salePrice') { await prisma.userHouses.update({ where: { userId, address }, data: { salePrice: data } }) }
    if (location == 'garage') { await prisma.userHouses.update({ where: { userId, address }, data: { garage: data } }) }
    redirect('./')
}


/**
 * Update other item
 * @param userId 
 * @param plate 
 * @param location 
 * @param data 
 */
async function updateUserOther(userId: string, name: string, location: string, data: any) {
    'use server'

    if (location == 'name') { await prisma.userOther.update({ where: { userId, name }, data: { name: data } }) }
    if (location == 'type') { await prisma.userOther.update({ where: { userId, name }, data: { type: data } }) }
    if (location == 'state') { await prisma.userOther.update({ where: { userId, name }, data: { state: data } }) }
    redirect('./')
}


/**
 * Primary Page
 * @returns 
 */
export default async function HomePage() {
    let allVehicles = await prisma.userVehicles.findMany()
    let allHouses = await prisma.userHouses.findMany()
    let allOtherStuff = await prisma.userOther.findMany()

    return <>
        <header>
            <h1 className='titleText'>User Manager</h1>
        </header>
        <section className='mainBox'>
            <div className='sectionBox'>
                <h2 className='sectionBoxTitle'>Vehicles</h2>
                {allVehicles.map(vehicle => (
                    <VehicleItem key={vehicle.userId} {...vehicle} removeVehicleItem={deleteUserVehicle} updateVehicleItem={updateUserVehicle} />
                ))}
                <div className='sectionBoxCreate'>
                    <Link className='sectionBoxCreateLink' href="/addVehicle" >Create New Vehicle</Link>
                </div>
            </div>
            <div className='sectionBox'>
                <h2 className='sectionBoxTitle'>Houses</h2>
                <div className='sectionBoxCreate'>
                    {allHouses.map(vehicle => (
                        <HouseItem key={vehicle.userId} {...vehicle} removeHouseItem={deleteUserHouse} updateHouseItem={updateUserHouse} />
                    ))}
                    <Link className='sectionBoxCreateLink' href="/addHouse" >Create New House</Link>
                </div>
            </div>
            <div className='sectionBox'>
                <h2 className='sectionBoxTitle'>Other</h2>
                <div className='sectionBoxCreate'>
                    {allOtherStuff.map(other => (
                        <OtherItem key={other.userId} {...other} removeOtherItem={deleteUserOther} updateOtherItem={updateUserOther} />
                    ))}
                    <Link className='sectionBoxCreateLink' href="/addOther" >Create New Other</Link>
                </div>
            </div>
        </section>
    </>
}
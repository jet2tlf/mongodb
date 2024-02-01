import { resourceName } from "..";
import { MongoConnection, connectingMongo } from "../database";

export async function middleware(params: any) {
    ScheduleResourceTick(resourceName)

    while (connectingMongo) await new Promise(resolve => setTimeout(resolve, 1))

    if (typeof params !== "object") return console.error('^1Invalid params to make a query^7')
    
    const db = MongoConnection

    const collection = db.collection(params.collection)
    if (collection == null) return console.error('^1Collection ' + params.collection + ' not found^7')

    return { collection: collection, params: params }
}
import { MongoConnection } from "../database"
import { middleware } from "../utils/middleware"
import { prepareObject } from "../utils/prepare"

export async function insertOne(params: { collection: string, document: object, options?: object }, callback: any) {
    try {
        if (typeof callback !== "function") callback = null

        const data = await middleware(params)
        if (typeof data !== "object") return null

        const document = prepareObject(data.params.document)
        const options = prepareObject(data.params.options)

        const collection = MongoConnection.collection(params.collection)
        const result = await collection.insertOne(document, options)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB find error catched:", error.message)
        return callback ? callback(null) : null 
    }
}
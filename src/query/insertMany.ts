import { MongoConnection } from "../database"
import { middleware } from "../utils/middleware"
import { prepareObject } from "../utils/prepare"

export async function insertMany(params: any, callback: any) {
    try {
        if (typeof callback !== "function") callback = null

        const data = await middleware(params)
        if (typeof data !== "object") return null

        const documents = prepareObject(data.params.documents)
        const options = prepareObject(data.params.options)

        const collection = MongoConnection.collection(params.collection)
        const result = await collection.insertMany(documents, options)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB find error catched:", error.message)
        return callback ? callback(null) : null
    }
}
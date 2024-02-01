import { prepare } from "../utils/prepare"
import { MongoConnection } from "../database"
import { middleware } from "../utils/middleware"

export async function insertMany(params: { collection: string }, callback: any) {
    try {
        if (typeof callback !== "function") callback = null

        const data = await middleware(params)
        if (typeof data !== "object") return null

        const document = prepare(data.params.document)
        const options = prepare(data.params.options)

        const collection = MongoConnection.collection(params.collection)
        const result = await collection.insertOne(document, options)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB find error catched:", error.message)
        return callback ? callback(null) : null 
    }
}
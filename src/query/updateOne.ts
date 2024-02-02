import { MongoConnection } from "../database"
import { middleware } from "../utils/middleware"
import { prepareObject } from "../utils/prepare"

export async function updateOne(params: { collection: string, query: object, update: object, options?: object }, callback: any) {
    try {
        if (typeof callback !== "function") callback = null

        const data = await middleware(params)
        if (typeof data !== "object") return null

        const query = prepareObject(data.params.query)
        const update = prepareObject(data.params.update)
        const options = prepareObject(data.params.options)

        const collection = MongoConnection.collection(params.collection)
        const result = collection.updateOne(query, update, options)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB find error catched:", error.message);
        return callback ? callback(null) : null;
    }
}
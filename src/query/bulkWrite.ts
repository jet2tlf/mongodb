import { MongoConnection } from "../database"

export async function bulkWrite(params: any, callback: any) {
    try {
        if (typeof callback !== "function") callback = null
        if (typeof params !== "object") return null;
        if (typeof params.collection !== "string") return null;
        if (typeof params.operations !== "object") return null;

        const collection = MongoConnection.collection(params.collection)
        const result = await collection.bulkWrite(params.operations)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB bulk write error catched:", error.message)
        return callback ? callback(null) : null 
    }
}
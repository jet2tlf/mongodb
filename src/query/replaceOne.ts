import { MongoConnection } from "../database"

export async function replaceOne(params: any, callback: any) {
    try {
        if (typeof callback !== "function") callback = null
        if (typeof params !== "object") return null;
        if (typeof params.collection !== "string") return null;
        if (typeof params.filter !== "object") return null;
        if (typeof params.replacement !== "object") return null;

        const collection = MongoConnection.collection(params.collection)
        const result = await collection.replaceOne(params.filter, params.replacement)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB find error catched:", error.message)
        return callback ? callback(null) : null 
    }
}
import { MongoConnection } from "../database"

export async function createIndex(params: any, callback: any) {
    try {
        if (typeof callback !== "function") callback = null
        if (typeof params !== "object") return null
        if (typeof params.collection !== "string") return null
        if (typeof params.index !== "object") return null

        const collection = MongoConnection.collection(params.collection)
        const result = collection.createIndex(params.index)

        return callback ? callback(result) : result
    } catch (error: any) {
        console.error("MongoDB create index error catched:", error.message);
        return callback ? callback(null) : null;
    }
}
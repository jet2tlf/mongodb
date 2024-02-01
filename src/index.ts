import { sleep } from "./utils/sleep"
import { createConnection, connectingMongo } from "./database"

import { count } from "./query/count"
import { findOne } from "./query/findOne"
import { findMany } from "./query/findMany"
import { updateOne } from "./query/updateOne"
import { insertOne } from "./query/insertOne"
import { bulkWrite } from "./query/bulkWrite"
import { deleteOne } from "./query/deleteOne"
import { insertMany } from "./query/insertMany"
import { updateMany } from "./query/updateMany"
import { replaceOne } from "./query/replaceOne"
import { deleteMany } from "./query/deleteMany"
import { createIndex } from "./query/createIndex"

export const credentials: string = GetConvar(`mongoCredentials`, "null");
export const resourceName: string = GetCurrentResourceName()

setTimeout(async () => {
    while (connectingMongo) {
        await createConnection(credentials)

        if (connectingMongo) await sleep(30000)
    }
})

exports('count', count)
exports('findOne', findOne)
exports('findMany', findMany)
exports('updateOne', updateOne)
exports('insertOne', insertOne)
exports('bulkWrite', bulkWrite)
exports('deleteOne', deleteOne)
exports('insertMany', insertMany)
exports('updateMany', updateMany)
exports('replaceOne', replaceOne)
exports('deleteMany', deleteMany)
exports('createIndex', createIndex)
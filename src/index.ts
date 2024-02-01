import { sleep } from "./utils/sleep";
import { createConnection, connectingMongo } from "./database";

import { insertOne } from "./query/insertOne";
import { insertMany } from "./query/insertMany";
import { findOne } from "./query/findOne";
import { findMany } from "./query/findMany";

export const credentials: string = GetConvar(`mongoCredentials`, "null");
export const resourceName: string = GetCurrentResourceName()

setTimeout(async () => {
    while (connectingMongo) {
        await createConnection(credentials)

        if (connectingMongo) await sleep(30000)
    }
})

exports('insertOne', insertOne)
exports('insertMany', insertMany)
exports('findOne', findOne)
exports('findMany', findMany)
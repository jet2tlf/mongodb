import { sleep } from "./utils/sleep";
import { createConnection, connectingMongo } from "./database";

import { insertOne } from "./query/insertOne";

export const credentials: string = GetConvar(`mongoCredentials`, "null");
export const resourceName: string = GetCurrentResourceName()

setTimeout(async () => {
    while (connectingMongo) {
        await createConnection(credentials)

        if (connectingMongo) await sleep(30000)
    }
})

exports('insertOne', insertOne)
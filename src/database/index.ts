import { Db, MongoClient } from "mongodb"
import { performance } from 'perf_hooks';

export let MongoConnection: Db
export let connectingMongo = true

export async function createConnection(credentials: string) {
    if (credentials == "null") return console.error("^3MongoDB credentials not entered^7")
    if (!credentials.includes("mongodb://")) return console.error("^3MongoDB credentials must start with mongodb://^7")

    const split: string[] = credentials.split("/")

    const databaseName: string = split[split.length - 1]
    if (databaseName == "") return console.error("^3MongoDB credentials must contain database name^7")

    credentials = credentials.replace(`/${databaseName}`, "")

    const start = performance.now()

    try {
        const client = new MongoClient(credentials, {
            connectTimeoutMS: 5000,
            serverSelectionTimeoutMS: 5000
        })

        client.connect().then(() => {
            const end = performance.now()
            const db = client.db(databaseName)

            MongoConnection = db
            console.log(`^2MongoDB connected successfully in ${(end - start).toFixed(4)}ms^7`)
            connectingMongo = false
        }).catch((error: any) => {
            console.error(`^3Can't connect to MongoDB, ${error.message}^7`)
        })
    } catch (error: any) {
        console.error(`^3Can't connect to MongoDB, ${error.message}^7`)
    }
}
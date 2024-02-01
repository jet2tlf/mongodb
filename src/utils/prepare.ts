import { ObjectId } from "mongodb"

export function prepare(input: any) {
    if (!input) return {}

    let output: Record<string, any> = {}

    if (Array.isArray(input)) {
        input.forEach((item, index) => {
            output[item] = index
        })
    } else if (typeof input === "object") {
        if (input._id) {
            output = { ...input, _id: new ObjectId(input._id) }
        } else {
            output = { ...input }
        }
    }

    return output
}
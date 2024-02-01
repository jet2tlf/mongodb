import { ObjectId } from "mongodb";

export function prepareObject(input: any): any {
    if (!input) return {};

    let output: any = [];

    if (Array.isArray(input)) {
        input.forEach((item: any, index: number) => {
            output[index] = item;
        });
    } else if (typeof input === "object") {
        if (input._id) {
            output = {
                ...input,
                _id: new ObjectId(input._id)
            };
        } else {
            output = { ...input };
        }
    }

    return output;
}
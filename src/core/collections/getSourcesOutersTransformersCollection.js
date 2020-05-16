import { SourceOuterTransformer } from "../transforms/SourceOuterTransformer";

export function getSourcesOutersTransformersCollection({ data: { sources: { length } }, resolve }) {
    const collection = [];

    for (let i = 0; i < length; i++) {
        collection.push(resolve(SourceOuterTransformer, [i]));
    }

    return collection;
}

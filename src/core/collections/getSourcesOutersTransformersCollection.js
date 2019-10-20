import { SourceOuterTransformer } from "../transforms/SourceOuterTransformer";

export function getSourcesOutersTransformersCollection({ data: { sourcesCount }, resolve }) {
    const collection = [];

    for (let i = 0; i < sourcesCount; i++) {
        const sourceHolderTransformer = resolve(SourceOuterTransformer, [i]);
        collection.push(sourceHolderTransformer);
    }

    return collection;
}

import { SourceMainWrapperTransformer } from "../transforms/SourceMainWrapperTransformer";

export function fillSourcesOutersTransformersCollection(
    {
        collections: { sourceMainWrappersTransformers },
        data: { sources },
        resolve
    }
) {
    for (let i = 0; i < sources.length; i++) {
        sourceMainWrappersTransformers[i] = resolve(SourceMainWrapperTransformer, [i]);
    }
}

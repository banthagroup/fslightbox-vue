import { SourceOuterTransformer } from "../transforms/SourceOuterTransformer";
import { fillSourcesOutersTransformersCollection } from "./fillSourcesOutersTransformersCollection";

const fsLightbox = {
    collections: { sourcesOutersTransformers: [] },
    resolve: (constructorDependency) => {
        if (constructorDependency === SourceOuterTransformer) {
            return 'source-outer-transformer';
        }
    },
    data: { sources: { length: 2 } }
};

it('should return array containing SourceOuterTransformer instances', () => {
    fillSourcesOutersTransformersCollection(fsLightbox);

    expect(fsLightbox.collections.sourcesOutersTransformers).toEqual(
        ['source-outer-transformer', 'source-outer-transformer']
    );
});

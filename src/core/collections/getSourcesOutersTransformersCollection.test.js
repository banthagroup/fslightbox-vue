import { getSourcesOutersTransformersCollection } from "./getSourcesOutersTransformersCollection";
import { SourceOuterTransformer } from "../transforms/SourceOuterTransformer";

const fsLightbox = {
    data: { sourcesCount: 2 },
    resolve: jest.fn(() => 'source-outer-transformer')
};

test('returning correct collection', () => {
    expect(getSourcesOutersTransformersCollection(fsLightbox)).toEqual([
        'source-outer-transformer', 'source-outer-transformer'
    ]);
    expect(fsLightbox.resolve).toBeCalledWith(SourceOuterTransformer, [0]);
    expect(fsLightbox.resolve).toBeCalledWith(SourceOuterTransformer, [1]);
});

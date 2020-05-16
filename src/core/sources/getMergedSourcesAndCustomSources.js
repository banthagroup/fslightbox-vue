export function getMergedSourcesAndCustomSources({ props: { sources, customSources } }) {
    const mergedSources = sources ? sources.slice() : customSources.slice();

    if (customSources && sources !== customSources) {
        for (let i = 0; i < customSources.length; i++) {
            if (customSources[i]) {
                mergedSources[i] = customSources[i];
            }
        }
    }

    return mergedSources;
}

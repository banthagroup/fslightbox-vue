import { shallowRef } from "vue";
import TestCustomSource from "../../../base/tests/__tests-services__/subcomponents/Custom.vue";

export const TEST_IMAGE_URL = "https://i.imgur.com/Ys15LQF.jpg";
export const TEST_VIDEO_URL = "https://storage.googleapis.com/rspec-fixture-files/Blue-1700.mp4";
export const TEST_YOUTUBE_URL = "https://www.youtube.com/watch?v=jNQXAC9IVRw";
export const TEST_INVALID_URL = "invalid";

export const testSources = [
    TEST_IMAGE_URL,
    TEST_VIDEO_URL,
    TEST_YOUTUBE_URL,
    TEST_INVALID_URL,
    shallowRef(TestCustomSource)
];

export const testTypes = [
    'image',
    'video',
    'youtube',
    'invalid'
];

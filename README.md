# Vue Fullscreen Lightbox Basic
Fullscreen Lightbox is plugin for displaying images, videos and more in clean overlaying box.

Website: https://fslightbox.com/vue

| Dependency | Version |
| --- | --- |
| vue | at least 2.5.0 |


## Basic usage

### Installation

```
 npm install --save-dev fslightbox-vue
```


### Example

```vue
<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <FsLightbox
            :toggler="toggler"
            :sources="[
                'https://i.imgur.com/fsyrScY.jpg',
                'https://www.youtube.com/watch?v=xshEZzpS4CQ',
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            ]"
        />
    </div>
</template>

<script>
    import FsLightbox from "fslightbox-vue";

    export default {
        components: { FsLightbox },
        data() {
            return {
                toggler: false
            }
        }
    }
</script>
```

## Demo
Available at: https://fslightbox.com/vue

## Documentation and props description
Available at: https://fslightbox.com/vue/documentation/basic

## Browser Compatibility

| Browser | Works? |
| --- | --- |
| Chrome | Yes |
| Firefox | Yes |
| Safari | Yes |
| Edge | Yes |
| IE 11 | Yes |

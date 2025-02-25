# Vue Fullscreen Lightbox Basic

## Description
A Vue.js component for displaying images, videos, or, through custom sources, anything you want in a clean overlying box.
The project's website: https://fslightbox.com.

| Dependency | Version |
| --- | --- |
| vue | >= 2.5.0 or >= 3.2.0 (Vue.js 3)|


## Installation
### Through a package manager
```
 npm install fslightbox-vue
```
### Or, through an archive downloaded from the website
The .tgz archive, in its entirety, should be put somewhere in the end project, for example, "./src/lib". Then run the package manager's install command with the path to that archive. The command have to be run from the directory where your project's "package.json" file is.
``` 
$ npm install ./src/lib/[lightbox archive name] 
```
For example:
``` 
$ npm install ./src/lib/fslightbox-react-1.0.0.tgz
```

## Basic usage
```vue
<template>
    <div>
        <button @click="toggler = !toggler">Open the lightbox.</button>
        <FsLightbox
            :toggler="toggler"
            :sources="[
                'https://i.imgur.com/fsyrScY.jpg',
                'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            ]"
        />
    </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";
// import FsLightbox from "fslightbox-vue/v2"; for Vue 2

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
Available at: https://fslightbox.com/vue.

## Documentation
Available at: https://fslightbox.com/vue/documentation.

## Browser Compatibility
| Browser | Works? |
| --- | --- |
| Chrome | Yes |
| Firefox | Yes |
| Safari | Yes |
| Edge | Yes |
| IE 11 | Yes (Vue 3 doesn't support IE 11 so only FsLightbox for Vue 2) |

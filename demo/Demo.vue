<template>
    <div>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>

        <FsLightbox
            :toggler="toggler"
            :sources="[
			'https://i.imgur.com/fsyrScY.jpg',
			'https://www.youtube.com/watch?v=xshEZzpS4CQ',
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
		]"
            :slide="slide"
            :custom-attributes="[
                {
                    srcSet: 'demo/img/7.jpg 600w, demo/img/5.jpg 1200w',
                    sizes: '(max-width: 600px) 600px, 1200px',
                },
                {
                    poster: 'demo/img/7.jpg'
                }
            ]"
        />
    </div>
</template>

<script>
import FsLightbox from "../FsLightbox.vue";

export default {
    components: { FsLightbox },
    data() {
        return {
            toggler: false,
            slide: 1
        }
    },
    methods: {
        openLightboxOnSlide: function (number) {
            this.slide = number;
            this.toggler = !this.toggler;
        }
    }
}
</script>

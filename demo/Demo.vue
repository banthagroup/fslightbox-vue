<template>
	<div>
		<button @click="toggler = !toggler">1</button>

		<FsLightbox
			:toggler="toggler"
			:sources="[
				'1.jpg',
				'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
				'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
				Vimeo,
				'0'
			]"
		/>
	</div>
</template>

<script>
import FsLightbox from "../FsLightbox.vue";
import Vimeo from "./Vimeo.vue";

export default {
	components: { FsLightbox },
	data() {
		return {
			toggler: false
		}
	},
	created() {
		this.Vimeo = Vimeo;
	}
}
</script>

<template>
	<div>
		<button @click="toggler = !toggler">1</button>

		<FsLightbox
			:toggler="toggler"
			:sources="[
				'1.jpg',
				'0'
			]"
		/>
	</div>
</template>

<script>
import FsLightbox from "../o.vue";

export default {
	components: { FsLightbox },
	data() {
		return {
			toggler: false
		}
	}
}
</script>

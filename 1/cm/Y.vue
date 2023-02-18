<template>
    <iframe
        class="fslightbox-source fslightbox-youtube-iframe"
        ref="a"
        :src="src"
        allowfullscreen
        v-bind="customAttributes"
    />
</template>

<script>
import { a } from "../a";

export default {
	props: { fsLightboxIndex: Number, i: Number },
	created() {
		var {
			props: {
				customAttributes,
				sources
			}
		} = a[this.fsLightboxIndex];
		
		var i = this.i;
		var url = sources[i];

		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var id = url.match(regExp)[2];

		var p = url.split("?")[1];
		p = p ? p : "";

		this.src = `https://www.youtube.com/embed/${id}?${p}`;
		this.customAttributes =
			customAttributes
			&& customAttributes[i];
	},
	mounted() {
		var fsLightbox = a[this.fsLightboxIndex];
		var i = this.i;

		fsLightbox.elements.sources[i] = this.$refs.a;

		fsLightbox.collections.sourceLoadHandlers[i].handleYoutubeLoad();
	}
}
</script>

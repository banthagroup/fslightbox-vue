<template>
    <iframe
        class="fslightbox-source fslightboxy"
        ref="a"
        :src="src"
        allowfullscreen
        v-bind="customAttributes"
    />
</template>

<script>
import { a } from "../a";

export default {
	props: { i: Number, j: Number },
	created() {
		var {
			props: {
				customAttributes,
				sources
			}, iap
		} = a[this.i];
		
		var i = this.j;
		var url = sources[i];

		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var id = url.match(regExp)[2];

		var p = url.split("?")[1];
		p = p ? p : "";

		this.src = `https://www.youtube.com/embed/${id}?${p}${iap?"&mute=1&autoplay=1":""}&enablejsapi=1`;
		this.customAttributes =
			customAttributes
			&& customAttributes[i];
	},
	mounted() {
		var fsLightbox = a[this.i];
		var i = this.j;

		fsLightbox.elements.sources[i] = this.$refs.a;

		fsLightbox.collections.sourceLoadHandlers[i].handleYoutubeLoad();
	}
}
</script>

<template>
    <div :class="`fslightbox-slide-btn-container fslightbox-slide-btn-${name}-container`"
         :title="title"
         @click="onClick">
        <div class="fslightbox-slide-btn fslightbox-flex-centered">
            <Svger
                view-box="0 0 20 20"
                size="20px"
                :d="d"
            />
        </div>
    </div>
</template>

<script>
    import Svger from "./helpers/Svger.vue";

    export default {
        components: { Svger },
        props: { onClick: Function, name: String, d: String },
        data() {
            const titleName = this.name.charAt(0).toUpperCase() + this.name.slice(1);

            return {
                title: `${ titleName } slide`
            }
        }
    }
</script>

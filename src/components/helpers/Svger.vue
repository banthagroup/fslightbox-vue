<template>
    <svg :width="size" :height="size" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
        <path class="fslightbox-svg-path" :d="d"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: String,
            viewBox: String,
            d: String
        }
    }
</script>

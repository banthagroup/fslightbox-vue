<template>
    <div><p>{{ firstProp }}</p><p>{{ secondProp }}</p></div>
</template>

<script>
export default {
    props: {
        firstProp: String,
        secondProp: String
    }
};
</script>

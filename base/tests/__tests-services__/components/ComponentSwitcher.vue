<template>
    <div>
        <div v-for="(TestComponent, testComponentName) in testComponents" :key="testComponentName">
            <button :id="testComponentName" @click="currentComponentName = testComponentName" />
            <component
                v-if="currentComponentName === testComponentName"
                :is="TestComponent"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        testComponents: Object
    },
    data() {
        return {
            currentComponentName: null
        }
    }
}
</script>
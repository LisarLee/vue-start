<template>
    <div>
        <Influenced />
        <Impact />
        <Quarter />
    </div>
</template>

<script>
import Influenced  from './components/Influenced.vue';
import Impact  from './components/Impact.vue';
import Quarter  from './components/Quarter.vue';
    export default {
        name:'marketing',
        data() {
            return {
            }
        },
        components: {
            Influenced,
            Impact,
            Quarter,
        },
        
    }
</script>

<style lang="less" scoped>
div[class$='_con']{
    box-sizing: border-box;
    padding: 2%;
}
</style>
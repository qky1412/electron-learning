<template>
    <div>
        this is login page
        <el-button type="primary" @click="enterHome">进入系统</el-button>
    </div>
</template>
<style>
</style>
<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
            enterHome () {
                this.$router.push({name: 'Home'})
            }
        }
    }
</script>

<template>
    <div class="demo-box">
        <img class="image" alt="Demo" src="../static/images/bg_liaoning.png">
        <button @click="handleClick">click</button>

        <router-view></router-view>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        data () {
            return {

            }
        },
        methods: {
            ...mapActions('menu', {
                setLeftCollapseMenu: 'setLeftCollapse'
            }),
            ...mapActions('other', ['setLeftCollapse', 'handleOther']),
            handleClick() {
                this.setLeftCollapse();
                this.handleOther();
                this.setLeftCollapseMenu();
                console.log(this.$store)
            }
        },
        created() {
            console.log(this.$webConfig);
            console.log(this.$store)
        }
    }
</script>
<style lang="less" scoped>
    .image {
        width: 500px;
    }
</style>
<style lang="scss" scoped>
    .demo-box {
        background-color: #ccc;
        height: 600px;
    }
</style>
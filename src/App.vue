<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-04-08 16:34:29
 * @LastEditTime : 2021-04-08 17:34:50
 * @LastEditors  : pacino
-->
<template>
    <router-view>
        <router-link to="/">首页</router-link>
        |
        <router-link to="/about">关于</router-link>
    </router-view>
    <router-view />
</template>

<script>
    export default {};
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

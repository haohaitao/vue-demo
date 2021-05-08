<!--
 * @Description  : 首页
 * @Author       : pacino
 * @Date         : 2021-04-08 16:50:17
 * @LastEditTime : 2021-04-25 14:41:50
 * @LastEditors  : pacino
-->
<template>
    <main>
        <div>我是首页页面</div>
        <div>
            {{ JSON.stringify(homeList) }}
        </div>
    </main>
</template>

<script>
    import { onMounted, ref, onBeforeMount, watchEffect } from 'vue';
    // import { posts } from '@/api/homeListApi';

    export default {
        name: 'PageContent',
        setup() {
            let homeList = ref([]);
            let a = 0;
            let b = 0;
            watchEffect(a, () => {
                b = 1;
            });

            onBeforeMount(() => {
                a = 1;
                console.log(a, b);
            });
            onMounted(async () => {
                //     let params = {
                //         per_page: 12,
                //     };
                //     const data = await posts(params);
                //     homeList.value = data;
            });
            return { homeList };
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    main {
        min-width: 1080px;
        margin: 90px auto 0;
    }
</style>

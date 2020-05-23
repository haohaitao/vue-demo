<template>
  <main>
    <section>
      <p>很抱歉，我们找不到您想要的东西。</p>
      <p>
        您可以试试CTRL+F5刷新页面，或者点击
        <router-link to="/">首页</router-link>进行浏览。
      </p>
      <div id="beastainer">
        <img id="beast404le" src="@/assets/imgs/beast-404_LE.png" alt="404图片" />
        <img id="beast404re" src="@/assets/imgs/beast-404_RE.png" alt="404图片" />
        <img class="beast 404" src="@/assets/imgs/beast-404.png" alt="404图片" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='scss' scoped>
section {
  animation: fadeIn 0.6s linear;
  padding: 170px 10px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  max-width:1000px;
  @keyframes crazyrighteye {
    0% {
      left: 231px;
      top: 68px;
    }

    10% {
      left: 212px;
      top: 62px;
    }

    20% {
      left: 212px;
      top: 62px;
    }

    40% {
      left: 239px;
      top: 64px;
    }

    50% {
      left: 240px;
      top: 80px;
    }

    60% {
      left: 215px;
      top: 73px;
    }

    70% {
      left: 231px;
      top: 68px;
    }

    100% {
      left: 231px;
      top: 68px;
    }
  }

  @keyframes crazylefteye {
    0% {
      left: 125px;
      top: 65px;
    }

    10% {
      left: 118px;
      top: 56px;
    }

    20% {
      left: 118px;
      top: 56px;
    }

    40% {
      left: 148px;
      top: 62px;
    }

    50% {
      left: 145px;
      top: 72px;
    }

    60% {
      left: 121px;
      top: 70px;
    }

    70% {
      left: 125px;
      top: 65px;
    }

    100% {
      left: 125px;
      top: 65px;
    }
  }
  #beastainer {
    float: right;
    padding: 20px 0 20px 20px;
    position: relative;
  }

  #beastainer > .beast {
    margin: 0;
  }
  #beast404le,
  #beast404re {
    position: absolute;
    -webkit-animation-delay: 6s;
    animation-delay: 6s;
    -webkit-animation-duration: 7s;
    animation-duration: 7s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  #beast404le {
    left: 125px;
    top: 65px;
    -webkit-animation-name: crazylefteye;
    animation-name: crazylefteye;
  }
  #beast404re {
    left: 231px;
    top: 68px;
    -webkit-animation-name: crazyrighteye;
    animation-name: crazyrighteye;
  }
  p {
    font-size:18px;
    text-align: left;
  }
  a{
        color: #3d7e9a;
  }
  button {
    margin-top: 32px;
    font-size: 14px;
  }
}
</style>

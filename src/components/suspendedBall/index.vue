<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-09-09 16:18:38
 * @LastEditTime: 2022-06-30 13:03:54
 * @LastEditors: pacino
-->
<template>
  <div class="circle-wrapper">
    <div
      class="circle-box"
      :class="{
        opened: showCircleContent,
        animation: isAnimated,
      }"
      ref="circle"
    >
      <div class="content" v-if="showCircleContent">
        <div class="info">
          <div class="title">
            <i class="iconfont icon"> &#xe7ed;</i>
            <a class="tel" href="tel:123456789">{{ title }}</a>
          </div>
        </div>
      </div>
      <div
        class="circle"
        v-if="!showCircleContent"
        @click="handleClickCircle"
        @touchend="handleTouchEnd"
        @touchmove.prevent="handleTouchMove"
      >
        <i class="iconfont icon">&#xe80a;</i>
      </div>
    </div>
    <div
      class="mask"
      :class="{ isOpen: showCircleContent }"
      @click="handleHideCircle"
    ></div>
  </div>
</template>

<script>
export default {
  name: "floatCircle",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      circleWidth: 0,
      circleHeight: 0,
      clientWidth: 0, //屏幕宽度
      clientHeight: 0, //屏幕高度
      placeholderWidth: 10,
      placeholderBottom: 100,
      showCircleContent: false,
      isAnimated: false,
    };
  },
  mounted() {
    //记录屏幕的宽度和高度
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
    this.initCircle();
  },
  methods: {
    initCircle() {
      this.$nextTick(() => {
        this.circleWidth = this.$refs.circle.clientWidth;
        this.circleHeight = this.$refs.circle.clientHeight;
        //初始化小球的位置在右侧居中的位置
        this.$refs.circle.style.left =
          document.documentElement.clientWidth - this.circleWidth + "px";
        this.$refs.circle.style.top =
          document.documentElement.clientHeight / 2 -
          this.circleHeight / 2 +
          "px";
        this.$refs.circle.style.borderRadius = "50% 0 0 50%";
      });
    },
    handleHideCircle() {
      let extendedWidth = 150; //与css中的$extendedWidth值保持一致
      if (this.showCircleContent) {
        if (this.$refs.circle.style.left !== "0px") {
          //在屏幕右边
          this.$refs.circle.style.left =
            parseInt(this.$refs.circle.style.left.replace("px", "")) +
            (extendedWidth - this.circleWidth) +
            "px";
        }
      }
      this.showCircleContent = false;
    },
    handleClickCircle() {
      let extendedWidth = 150; //与css中的$extendedWidth值保持一致
      if (!this.showCircleContent) {
        if (this.$refs.circle.style.left === "0px") {
          this.$refs.circle.style.borderRadius = "0 100px 100px 0";
        } else {
          //在屏幕右边
          this.$refs.circle.style.left =
            parseInt(this.$refs.circle.style.left.replace("px", "")) -
            (extendedWidth - this.circleWidth) +
            "px";
          this.$refs.circle.style.borderRadius = "100px 0 0 100px";
        }
      }
      this.showCircleContent = true;
    },
    //限制悬浮球一个范围内滑动
    handleTouchMove(e) {
      this.isAnimated = false; //手指拖动小球滑动的时候不需要动画，滑动停止的时候添加动画
      this.$refs.circle.style.borderRadius = "50%";
      let offsetX = e.targetTouches[0].clientX - this.circleWidth / 2; //减去this.circleWidth / 2目的是让手指按在悬浮球正中
      let offsetY = e.targetTouches[0].clientY - this.circleHeight / 2; //减去this.circleHeight / 2目的是让手指按在悬浮球正中
      if (offsetX <= 0 + this.placeholderWidth) {
        offsetX = 0 + this.placeholderWidth; //不让悬浮球完全贴边
      } else if (
        offsetX >=
        document.documentElement.clientWidth -
          this.circleWidth -
          this.placeholderWidth //微信悬浮球不是完全贴边，离屏幕边缘有一段距离
      ) {
        offsetX =
          document.documentElement.clientWidth -
          this.circleWidth -
          this.placeholderWidth;
      }

      if (offsetY <= 0 + this.placeholderWidth) {
        offsetY = 0 + this.placeholderWidth;
      } else if (
        offsetY >=
        document.documentElement.clientHeight -
          this.circleHeight -
          this.placeholderWidth
      ) {
        offsetY =
          document.documentElement.clientHeight -
          this.circleHeight -
          this.placeholderWidth;
      }
      this.$refs.circle.style.left = offsetX + "px";
      this.$refs.circle.style.top = offsetY + "px";
    },
    //touchend的时候，悬浮球吸边显示
    handleTouchEnd() {
      this.isAnimated = true; //手指拖动小球滑动的时候不需要动画，滑动停止的时候添加动画
      let circleCenterX =
        parseInt(this.$refs.circle.style.left.replace("px", "")) +
        this.circleWidth / 2; //悬浮球中心的x坐标
      let circleCenterY =
        parseInt(this.$refs.circle.style.top.replace("px", "")) +
        this.circleHeight / 2; //悬浮球中心的y坐标

      if (circleCenterX < this.clientWidth / 2) {
        //吸附左侧
        this.$refs.circle.style.left = 0;
        this.$refs.circle.style.borderRadius = "0 50% 50% 0";
      } else {
        //吸附在右侧
        this.$refs.circle.style.left =
          this.clientWidth - this.circleWidth + "px";
        this.$refs.circle.style.borderRadius = "50% 0 0 50%";
      }

      if (circleCenterY >= this.clientHeight - this.placeholderBottom) {
        this.$refs.circle.style.top =
          this.clientHeight - this.placeholderBottom + "px";
      }
    },
    // formatTime(time) {
    //   let result = time + "";
    //   let minuate = parseInt(time / 60) + "";
    //   if (minuate.length <= 1) {
    //     result = this.leftPad(minuate, 2, "0");
    //   } else {
    //     result = minuate;
    //   }

    //   let second = parseInt(time % 60) + "";
    //   if (second.length <= 1) {
    //     result = result + ":" + this.leftPad(second, 2, "0");
    //   } else {
    //     result = result + ":" + second;
    //   }
    //   return result;
    // },
    // leftPad(str, len, ch) {
    //   // convert `str` to a `string`
    //   str = str + "";
    //   // `len` is the `pad`'s length now
    //   len = len - str.length;
    //   // doesn't need to pad
    //   if (len <= 0) return str;
    //   // `ch` defaults to `' '`
    //   if (!ch && ch !== 0) ch = " ";
    //   // convert `ch` to a `string` cuz it could be a number
    //   ch = ch + "";
    //   // cache common use cases
    //   if (ch === " " && len < 10) return cache[len] + str;
    //   // `pad` starts with an empty string
    //   var pad = "";
    //   // loop
    //   while (true) {
    //     // add `ch` to `pad` if `len` is odd
    //     if (len & 1) pad += ch;
    //     // divide `len` by 2, ditch the remainder
    //     len >>= 1;
    //     // "double" the `ch` so this operation count grows logarithmically on `len`
    //     // each time `ch` is "doubled", the `len` would need to be "doubled" too
    //     // similar to finding a value in binary search tree, hence O(log(n))
    //     if (len) ch += ch;
    //     // `len` is 0, exit the loop
    //     else break;
    //   }
    //   // pad `str`!
    //   return pad + str;
    // },
  },
};
</script>

<style lang="scss">
$extendedWidth: 150px;
$circleWidth: 46px;
$circleHeight: 46px;
$soundWidth: 26px;
$soundHeight: 26px;

.hidden {
  display: none;
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: none;
  user-select: none;
  z-index: 999;

  &.isOpen {
    display: block;
  }
}
.circle-wrapper {
  display: block;
}
.circle-box {
  position: relative;
  width: $circleWidth;
  height: $circleHeight;
  position: fixed;
  z-index: 9999;
  border-radius: 50%;
  background-color: orange;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent; //ios长按的高亮灰色设置为透明
  -webkit-touch-callout: none; //ios禁止显示系统默认菜单
  -webkit-user-select: none; //ios控制文本是否默认选中
  user-select: none;
  img {
    -webkit-touch-callout: none; //ios禁止显示系统默认菜单
    // pointer-events: none; //禁止长按图片保存，同时禁止img的所有点击事件
  }

  &.opened {
    width: $extendedWidth;
  }

  &.animation {
    transition: all 0.3s;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;

    .info {
      flex: 1;
      width: 50px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      font-size: 10px;
      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .tel {
          color: #fff !important;
          text-decoration: none !important;
        }
      }
      .time {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
.circle {
  width: 100%;
  height: 100%;
  .icon {
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
    background-size: $soundWidth $soundHeight;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
  }
}
</style>

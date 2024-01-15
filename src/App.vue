<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less" >
@import './assets/variables.less'; // 导入同一样式

.el-message {
  font-size: 14px;
  /* 修改消息提示框的字体大小 */
}

#app {
  font-size: @font-size;
}

img {
  width: 100%;
  height: 100%;
}</style>

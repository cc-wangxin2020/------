<template>
  <div class="layout-container">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="main" id="test">
        <slot name="main"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '~@/style/var.less';
.layout-container {
    display: flex;
    width: 100%;
    height: 100%;
    .left {
        flex: 0 0 auto;
    }
    .main {
        flex: 1 1 auto;
        background-color: @theme;
    }
    .right {
        flex: 0 0 auto;
    }
}

</style>
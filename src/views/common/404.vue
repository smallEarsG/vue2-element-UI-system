<template>
    <section>
        <div class="page-container">
            <img class="img" src="../../assets/404.png" alt="" />
            <div>页面不存在！您可以选择 <el-button type="primary" @click="()=> $router.push({ path: '/' })" round>返回首页</el-button></div>
        </div>

    </section>
</template>
<style lang="less" scoped>
.page-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 20px;
    text-align: center;
    color: #777;
    background: #eff0f2;
    margin: 0;
    img {
        display: inline-block;
        margin-top: 70px;
        width: 400px;
        height: 300px;
    }
}
</style>
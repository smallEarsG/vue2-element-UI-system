<template>
    <div class="contanier">
        <el-container>
            <el-header><headerVue /></el-header>
            <el-container>
                <el-aside>
                    
                </el-aside>
                <el-main> <router-view/></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import headerVue from '../../components/layOut/header.vue';
export default {
    components: {
        headerVue
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/variables.less';
.contanier {
    display: flex;
    flex-direction: column;
    /* 垂直布局 */
    height: 100vh;
    /* 让容器高度占据整个视口 */
}
.el-header{
    padding:0;
    overflow: hidden;
    height: auto;
    height: 60px;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 2rem !important;
  }
// /deep/ </style> 
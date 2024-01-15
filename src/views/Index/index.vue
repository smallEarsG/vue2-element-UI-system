<template>
    <div class="contanier">
        <el-container>
            <el-header>
                <headerVue />
            </el-header>
            <el-container>
                <el-aside>
                    <asideVue />
                </el-aside>
                <el-main>
                    <div class="routerNav">
                        <el-tag closable size="small">标签一</el-tag>
                    </div>
                    <div class="content"> <router-view /></div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import headerVue from '../../components/layOut/header.vue';
import asideVue from '../../components/layOut/aside.vue';
export default {
    components: {
        headerVue,
        asideVue
    },
    data() {
        return {

        }
    },
    mounted() {
        // 获取所有的Cookie
       
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

.el-header {
    padding: 0;
    overflow: hidden;
    height: auto;
    height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #fff;
    text-align: center;
    line-height: 200px;
    width: auto !important;
    overflow: hidden;

}

.el-main {
    box-sizing: border-box;
    position: relative;
    background-color: #F2F6FC;

}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
    height: 100%;

}

.el-menu-vertical-demo {
    color: #fff;
    height: 100%;
}

.routerNav {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 5px 10px;
    box-sizing: border-box;
}

.content {
    margin-top: 20px;

}
</style> 
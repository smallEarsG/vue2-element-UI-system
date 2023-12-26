<template>
    <div class="contanier">
        <el-container>
            <el-header>
                <headerVue />
            </el-header>  
            <el-container>
                <el-aside>
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                        :collapse="isCollapse" background-color="#3498db" text-color="#fff" active-text-color="#ffd04b">
                        <el-menu-item index="1">
                                <i class="el-icon-location"></i>
                                <span slot="title">首页</span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航二</span>
                            </template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">设置</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import headerVue from '../../components/layOut/header.vue';
export default {
    components: {
        headerVue
    },
    data() {
        return {
            isCollapse: true
        }
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

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
    height: 100%;
 
}
.el-menu-vertical-demo{
    color: #fff;
    height: 100%;
}

/deep/.el-submenu__title i {
    color: #fff;
}
/deep/.el-menu-item i{
    color: #fff;
}
</style> 
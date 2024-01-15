<template>
    <el-menu :default-active="index" class="el-menu-vertical-demo" @open="() =>{}" @close="() =>{}" @select="val => index = val"
        :collapse="isCollapse" background-color="#3498db" text-color="#fff" active-text-color="#ffd04b" :router="true">
        <el-menu-item index="/default">
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
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </template>
            <el-menu-item index="/user">用户信息</el-menu-item>
            <el-menu-item index="3-1">权限设置</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script >
export default {
    data() {
        return {
            isCollapse: false,
            index:'/default',
        }
    },
    methods:{
    }
}
</script>
<style lang="less" scoped>
/deep/.el-submenu__title i {
    color: #fff;
}
/deep/.el-menu-item i{
    color: #fff;
}
</style>
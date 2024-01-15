<template>
    <div class="header">
        <div class="logo">
            <div class="img"> <img src="../../assets/logo.png" alt="logo"></div>
            <div>vue2管理系统</div>
        </div>
        <div class="menu">
            <el-menu class="el-menu-demo" mode="horizontal" @select="() => { }" background-color="#3498db" text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="my">
                <el-menu class="el-menu-demo" mode="horizontal" @select="() => { }" background-color="#3498db"
                    text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="2">
                        <template slot="title"><el-avatar
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3" @click="loginOut">退出登陆</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
import { loginOut } from '../../api/login'
export default {
    data() {
        return {}
    },
    methods: {
      async loginOut() {
            // 清除cookie  退回登录页
            const { code } = await loginOut()
            code === 200 ? this.$router.push('/login') : this.$message.error("退出成功")
           
        },
       
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/variables.less';

.header {
    padding: 0 20px;
    display: flex;
    background-color: @primary-color ;
    overflow: hidden;
    justify-content: space-between;

    /deep/.el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    .logo {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 24px;

        .img {
            width: 60px;
            height: 60px;
        }

    }

    .menu {
        display: flex;
        align-items: center;

        .el-menu-demo {
            // background-color: @primary-color !important;
            height: 60px;
        }

        .my {
            margin-left: 10px;
            position: relative;

            .contorl {
                position: absolute;
                background-color: rebeccapurple;
                width: 200px;
                height: 200px;
                // top: 100px;

            }
        }
    }

}</style>
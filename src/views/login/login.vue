<template>
    <div class='container'>
        <div class='content'>
            <div class='conLeft'>
                <div class='logo'><img src='../../assets/logo.png' alt='Vue2后台管理系统'></div>
                <div class='titleLfet'>Vue2后台管理系统</div>
            </div>
            <el-form :model="Account" :rules="rules" ref="ruleForm" class='conRight'>
                <div class='title mb'>登陆</div>
                <el-form-item class='user mb' prop="userName">
                    <el-input v-model='Account.userName' size='large' placeholder='请输入账号' prefix-icon='el-icon-user' />
                </el-form-item>
                <el-form-item class='password mb' prop="passWord">
                    <el-input v-model='Account.passWord' class='w-50 m-2' size='large' show-password placeholder='请输入密码'
                        prefix-icon='el-icon-lock' />
                </el-form-item>
                <el-form-item class='code ' prop="codeIup">
                    <div class='codeTitle '>验证码</div>
                    <div class='codeContent'>
                        <div class='codeInp'>
                            <el-input v-model='Account.codeIup' class='w-50 m-2' size='large' />
                        </div>
                        <div class='codeTxt'>
                            <canvas id='canvas' ref="canvas" class="canvasC" @click="refreshCode"></canvas>
                        </div>
                        <div class='codebtn' @click="refreshCode">看不清？点我换一张</div>
                    </div>
                </el-form-item>
                <div class='msg'>{{ msg }}</div>
                <div class='submit mb' @click="submit">登陆</div>

            </el-form>
        </div>
        <div class='link'>Copyright 2021-2022 Flashmutual. All Rights Reserved. Vue2后台管理系统 版权所有 粤ICP备xxxxxxx号
        </div>
    </div>
</template>

<script>
import { refreshCode } from './common'
import { login } from '../../api/login'
export default {
    data() {
        const validateCode = (rule, value, callback) => {
            if (value == "" || !value) {
                callback(new Error('验证码不能为空'))
            }else
            if (value.toLowerCase() !== this.validCode.toLowerCase()) {
                callback(new Error('校验错误'))
            } else {
                callback()
            }
        }
        return {
            Account: {},
            validCode: '',
            msg: "",
            rules: {
                "userName": [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                ],
                "passWord": [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                ],
                "codeIup": [{
                    required: true,
                    trigger: '',
                    validator: validateCode
                }]
            }
        }
    },
    mounted() {
        this.refreshCode()
    },
    methods: {
        refreshCode() {
            // 保存生成的验证码
            this.validCode = refreshCode(this.$refs.canvas)
        },
       submit() {
            this.$refs['ruleForm'].validate( (valid) => {
                if (valid) {
                 login(this.Account).then(res => {
                    if(res.code === 200){
                        this.$router.push('/');
                    }else{
                        this.$message.error("登录失败，"+res.msg)
                        this.refreshCode()
                    }
                 })
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/variables.less';

 /deep/.el-form-item__content{
  line-height: 0 !important;
}
.canvasC {
    height: .4rem;
    width: 1rem;
}

.mb {
    margin-top: .20rem;
    width: 4.50rem
}

.container {
    background-color: @primary-color ;
    background-size: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 0.21rem;
}

.content {
    width: 13.43rem;
    height: 6.58rem;
    background: #FFFFFF;
    border-radius: .24rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
}

.conLeft,
.conRight {
    flex: 1;
}

.conLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 1.38rem;
    height: 1.38rem;
}

.logo img {
    width: 100%;
    height: 100%;
}

.titleLfet {
    font-size: .36rem;
    font-weight: 500;
    color: @primary-color ;
    line-height: .54rem;
    margin-top: .35rem;
}

.conRight {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.submit {
    width: 4.50rem;
    height: .42rem;
    background-color: @primary-color ;
    border-radius: .20rem;
    color: #fff;
    text-align: center;
    line-height: .42rem;
}

.title {
    font-size: .34rem;
    font-family: NotoSansHans-Medium, NotoSansHans;
    font-weight: 500;
    color: #333333;
    line-height: .51rem;
}

.codeTitle {
    font-size: .2rem;
    font-family: NotoSansHans-Regular, NotoSansHans;
    font-weight: 400;
    color: @primary-color ;
    line-height: .36rem;
    margin-bottom: .10rem;
}

.codeContent {
    display: flex;
    flex-direction: row;
}

.link {
    position: absolute;
    bottom: .1rem;
    text-align: center;
    color: #fff;
    width: 100%;
    cursor: pointer;
}

.codeTxt {
    margin: 0 .5rem;
    // background-color:red ;
}

.code {
    padding: 0px .09rem;
    box-sizing: border-box;
    width: 4.50rem
}

.codebtn {
    line-height: .20rem;
    cursor: pointer;
    font-size: .15rem;
    height: 100%;
    position: relative;
}
</style>

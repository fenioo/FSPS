<template>
    <div>
        <div style="width: 550px; height: 480px; margin: 140px auto 0; background-color: rgba(151,187,99,0.3); border-radius: 18px; z-index: 100;overflow: hidden; /* 隐藏多余的模糊效果*/">
            <h2 style="color: darkseagreen; margin-top: 40px">WELCOME REGISTER</h2>
            <div style="width: 100%; height: 80px; font-size: 32px; line-height: 50px; text-align: center; color: #fff">
                林业科普系统后台
            </div>
            <div style="margin-top: 20px; text-align: center; height: 200px;">
                <el-form :model="user">
                    <el-form-item>
                        <el-input v-model="user.name" prefix-icon="el-icon-user" style="width: 65%;"
                                  placeholder="请输入用户名"/>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="user.password" show-password prefix-icon="el-icon-lock" style="width: 65%;"
                                  placeholder="请输入密码"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width: 20%; margin-top: 20px" type="success" plain @click="register()">注册
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <a href="/login" style="color: darkseagreen; font-size:16px; text-decoration: none;float: right;margin: 8px 40px">已经有账号？去登录</a>
        </div>
    </div>
</template>

<script>

    import request from "@/utils/request";

    export default {
        name: 'register',
        data() {
            return {
                user: {}
            }
        },
        created() {
        },
        methods: {
            register() {
                request.post("/user/register", this.user).then(res => {
                    if (res.code === '0') {
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        this.$router.push("/login");
                    } else {
                        this.$message({
                            message: res.msg,
                            type: 'error'
                        });
                    }
                })
            }
        }
    }
</script>

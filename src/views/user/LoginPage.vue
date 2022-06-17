<template>
    <div class="content">
        <el-row>
            <el-col :sm="{span:14, offset:5}" :xs="{span:24,offset:0}" :md="{span:10, offset:7}">
                <div class="login">
                    <el-form ref="ruleFormRef" :rules="rules" label-width="100px" :model="formData"
                             label-position="left">
                        <el-form-item label="用户名：" prop="username">
                            <el-input v-model="formData.username"/>
                        </el-form-item>
                        <el-form-item label="密码：" prop="password">
                            <el-input v-model="formData.password"/>
                        </el-form-item>
                        <el-form-item label="验证码：" prop="code">
                            <el-input v-model="formData.code"/>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="opacity: 0.7" type="warning" @click="resetForm(ruleFormRef)"
                                       :loading="resetLoad">
                                清空
                            </el-button>
                            <el-button style="opacity: 0.7" type="primary" @click="submitForm(ruleFormRef)">登录
                            </el-button>
                        </el-form-item>
                    </el-form>

                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { onBeforeRouteLeave } from "vue-router";
import router from "@/router";
import { userLogin } from "@/api/user";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
    name: "LoginPage",
    setup() {
        const ruleFormRef = ref<FormInstance>();
        const store = useStore();
        const resetLoad = ref(false);

        interface response {
            username: string,
            password: string,
            code: string
        }

        const formData: response = reactive({
            username: '',
            password: '',
            code: ''
        })
        const rules = reactive<FormRules>({
            username: [
                {required: true, message: '请输入用户名', trigger: 'blur'},
                {min: 3, max: 12, message: '长度在3到12之间', trigger: 'blur'}
            ],
            password: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                {min: 3, max: 5, message: '长度在3到5之间', trigger: 'blur'}
            ],
            code: [
                {required: true, message: '请输入验证码', trigger: 'blur'}
            ]
        });

        const submitForm = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            await formEl.validate((valid, fields) => {
                if (valid) {
                    userLogin().then((res) => {
                        console.log(res)
                        ElMessage({message: `欢迎！ ${formData.username} 登录成功`, type: 'success'})
                        store.commit('SET_TOKEN', res.data.token)
                        router.push('/')
                    })

                } else {
                    console.log('error submit!', fields)
                }
            })
        }
        const resetForm = (formEl: FormInstance | undefined) => {
            resetLoad.value = true
            setTimeout(() => {
                resetLoad.value = false
                if (!formEl) return
                formEl.resetFields()
            }, 1000)

        }
        const goHome = function () {
            router.push({path: '/'})
        }
        //离开时去除body的背景色
        onBeforeRouteLeave(() => {
            console.log("onBeforeRouteLeave")
            const s: any = document.querySelector('body');
            s.setAttribute('style', "background-image:''")
        })
        return {
            formData,
            submitForm,
            rules,
            resetForm,
            ruleFormRef,
            goHome,
            resetLoad
        }
    }
})
</script>

<style lang="scss" scoped>
.content {
    .login {
        text-align: center;
        border-radius: 20px;
        padding: 80px 30px;
        margin: 100px 10px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2), 10px 10px 20px rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background: linear-gradient(to top right, rgba(234, 234, 234, 0.51), rgba(171, 171, 171, 0.8));
        backdrop-filter: blur(3px);
        z-index: 100;
    }

}
</style>

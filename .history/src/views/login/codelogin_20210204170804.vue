<template>
  <el-form
    ref="loginForm"
    class="login-form"
    status-icon
    :rules="loginRules"
    :model="loginForm"
    label-width="0"
  >
    <el-form-item prop="phone">
      <el-input
        v-model="loginForm.phone"
        size="small"
        auto-complete="off"
        placeholder="请输入手机号码"
        @keyup.enter.native="handleLogin"
      >
        <i slot="prefix" class="icon-shouji" />
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input
        v-model="loginForm.code"
        size="small"
        auto-complete="off"
        placeholder="请输入验证码"
        @keyup.enter.native="handleLogin"
      >
        <svg-icon
          slot="prefix"
          icon-class="validCode"
          class="el-input__icon input-icon"
        />
        <template slot="append">
          <span
            class="msg-text"
            :class="[{ display: msgKey }]"
            @click="handleSend"
            >{{ msgText }}</span
          >
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        size="small"
        type="primary"
        class="login-submit"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
const MSGINIT = "发送验证码";
// const MSGERROR = '验证码发送失败'
const MSGSCUCCESS = "${time}秒后重发";
const MSGTIME = 60;
import { isvalidatemobile } from "@/utils/validate";
export default {
  name: "Codelogin",
  props: [],
  data() {
    const validatePhone = (rule, value, callback) => {
      if (isvalidatemobile(value)[0]) {
        callback(new Error(isvalidatemobile(value)[1]));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value.length !== 4) {
        callback(new Error("请输入4位数的验证码"));
      } else {
        callback();
      }
    };
    return {
      msgText: MSGINIT,
      msgTime: MSGTIME,
      msgKey: false,
      loginForm: {
        phone: "17547400800",
        code: "",
      },
      loginRules: {
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
        code: [{ required: true, trigger: "blur", validator: validateCode }],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleSend() {
      if (this.msgKey) return;
      this.msgText = MSGSCUCCESS.replace("${time}", this.msgTime);
      this.msgKey = true;
      const time = setInterval(() => {
        this.msgTime--;
        this.msgText = MSGSCUCCESS.replace("${time}", this.msgTime);
        if (this.msgTime === 0) {
          this.msgTime = MSGTIME;
          this.msgText = MSGINIT;
          this.msgKey = false;
          clearInterval(time);
        }
      }, 1000);
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch("Login", this.loginForm).then((res) => {
            this.$router.push({ path: "/" });
          });
        }
      });
    },
  },
};
</script>

<style>
.yanzhengma {
  display: block;
  margin-top: 8px;
}
.msg-text {
  display: block;
  width: 60px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
.msg-text.display {
  color: #ccc;
}
</style>

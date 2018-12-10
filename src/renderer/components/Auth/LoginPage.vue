<template>
  <div class="login-form-controls">
    <div class="login">
      <b-form-group 
        id="email" 
        label="Enter you email" 
        label-for="email">
        <b-form-input 
          id="email" 
          v-model.trim="user.userName" 
          type="email"/>
      </b-form-group>

      <b-form-group 
        id="password" 
        label="Enter your password" 
        label-for="password">
        <b-form-input 
          id="password" 
          v-model.trim="user.password" 
          type="password"/>
      </b-form-group>
      <b-button 
        :block="true" 
        @click="loginUser()">Login</b-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["login", "someAsyncTask"]),
    loginUser() {
      let vm = this;
      this.login(vm.user);
    }
  }
};
</script>
<style lang="scss" scoped>
.login-form-controls {
  display: flex;
  justify-content: center;
  .login {
    min-width: 490px;
    min-height: 420px;
    margin-top: 40px;
    button {
      margin-top: 20px;
    }
  }
}
</style>

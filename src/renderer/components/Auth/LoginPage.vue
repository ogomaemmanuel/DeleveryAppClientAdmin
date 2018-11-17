<template>
<div class="login-form-controls">
    <div class="login">
         <b-form-group
            id="email"
            label="Enter you email"
            label-for="email"
            >
        <b-form-input
         id="email"
         type="email"
        v-model.trim="user.email"></b-form-input>
       </b-form-group>

    <b-form-group
      id="password"
      label="Enter your password"
      label-for="password">
    <b-form-input type="password" id="password"  v-model.trim="user.password"></b-form-input>
  </b-form-group>
   <b-button @click="loginUser()" :block="true">Login</b-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginUser() {
        console.log("login Button pressed")
       
        this.$router.push( { name: 'home-page'});
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



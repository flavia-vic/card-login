new Vue({
    el: '#app',
    data: {
      isLogin: true,
      isRegister: false,
      isForgot: false
    },
    methods: {
      showLogin() {
        this.isLogin = true;
        this.isRegister = false;
        this.isForgot = false;
      },
      showRegister() {
        this.isLogin = false;
        this.isRegister = true;
        this.isForgot = false;
      },
      showForgot() {
        this.isLogin = false;
        this.isRegister = false;
        this.isForgot = true;
      }
    }
  });
<template >
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <p class="title">Webproject</p>
      </div>
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form>
          <div class="form-group has-feedback">
            <input type="login" class="form-control" placeholder="Login">
            <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password">
            <span class="fa fa-lock form-control-feedback" aria-hidden="true"></span>
          </div>
          <div class="row">
            <div class="col-xs-4 pull-right">
              <button
                      class="btn btn-primary btn-block btn-flat">
                        Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
document.title = 'Login';

import '../store/auth';
</script>

<style scoped>
  .title{
    font-family: "Open-Sans Regular", sans-serif;
  }

  .login-page{
    background-color: #e8e8e8;
    height: 100%;
  }

  .login-box{
    margin-top: 0;
    padding-top: 20px;
  }
</style>

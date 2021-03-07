<template>
  <div class="login_page">
    <div class="content">
      <section class="main__text">
        <Login
          @successHandler="handleSuccessCase($event)"
          @errHandler="handleErrCase($event)"
        />

        <div class="response_msg">
          <Title
            center
            small
            :success="successMsg ? true : false"
            :danger="errMsg ? true : false"
            >{{ successMsg ? successMsg : errMsg }}</Title
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "login",

  data() {
    return {
      successMsg: null,
      errMsg: null
    };
  },

  methods: {
    handleSuccessCase(event) {
      this.successMsg = event;
      this.errMsg = null;
    },

    handleErrCase(event) {
      this.errMsg = event;
      this.successMsg = null;
    }
  }
};
</script>

<template>
  <div style=" background-color: #ccc">
    <mt-header title="排行" style="background-color:#fff;color:#000">
      <router-link to="/" slot="left" style="color:#00c98d;">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" style="color:#00c98d"></mt-button>
    </mt-header>
    <div>
      <div class="p_con" v-if="$key%2==0" v-for="(i,$key,$index) in list">
        <div style="padding:1rem">
          <div class="p_tt">{{i.content.toTitle}}</div>
          <div class="p_ct">{{i.content.desc}}</div>
        </div>
         <div class="seperator"></div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      fl: "",
      list: ""
    };
  },
  created() {
    this.$http
      .get(
        "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query",
        {
          params: {
            appId: 1,
            pageId: 4,
            channelId: "",
            versionId: "",
            ver: "",
            shuqi_h5: "",
            md5key: "",
            userId: 8000000,
            timestamp: 1582432839,
            type: 2,
            resetcache: "",
            sign: "18B6208D0DC834F2651AC2FEDB41984D",
            key: "shuqiapi",
            _: 1582432839150
          }
        }
      )
      .then(
        data => {
          this.list = data.body.data.module;
        },
        err => {}
      );
  }
};
</script>
<style>
.img {
  width: 36px;
  height: 36.5px;
  float: left;
  /* background-size: 100%; */
}
.p_con {
  background: #fff;
  position: relative;
}
.p_tt {
  margin-top: 0.16rem;
  margin-left: 60px;
  font-size: 14px;
}
.p_ct {
  margin-bottom: 0.32rem;
  font-size: 12px;
  margin-left: 60px;
}
.seperator {
  width: 100%;
  height: 1rem;
  background: #f0f0f2;
}
</style>
<template>
  <div>
    <mt-header title="精品书单" style="background-color:#fff;color:#000">
      <router-link to="/" slot="left" style="color:#00c98d;">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" style="color:#00c98d"></mt-button>
    </mt-header>
    <div>
      <div class="s_con" v-for="i in s_list">
        <div class="s_text">
          <h3 class="s_tt">{{i.title}}</h3>
          <p class="s_ct">{{i.sdesc.slice(0,90)}}</p>
          <span class="s_label">{{i.tags}}</span>
        </div>
        <div class="s_right">
          <img :src="i.items[0].cover" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      s_list: ""
    };
  },
  created() {
    this.$http
      .get(
        "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1582447954932",
        {
          params: {
            do: "is_pay_sdlist",
            page: 1,
            size: 10,
            shuqi_h5: "",
            onlyCpBooks: 1,
            _: 1582447954932
          }
        }
      )
      .then(data => {
        this.s_list = data.data.data;
      });
  }
};
</script>
<style>
.s_con {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
.s_text {
  float: left;
  width: 70%;
  margin-right: 1rem;
}
.s_tt {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  font: 1rem "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  line-height: 1.5;
  color: #333;
}
.s_ct {
  font-size: 0.7rem;
  color: #999;
  line-height: 1rem;
  margin-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.s_label {
  display: inline-block;
  border: 1px solid #ccc;
  color: grey;
  margin-top: 0.2rem;
  padding: 0.1rem;
  font-size: 0.2rem;
}
.s_right {
  float: left;
  width: 15%;
  margin-top: 0.14rem;
}
.s_right img {
  width: 3rem;
  height: 4rem;
}
</style>
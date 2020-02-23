<template>
  <div>
    <mt-header title="分类" style="background-color:#fff;color:#000">
      <router-link to="/" slot="left" style="color:#00c98d;">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" style="color:#00c98d"></mt-button>
    </mt-header>
    <div>
      <div v-for="(i,$key,$index2) in list">
        <div>{{$key=='girl'?'女生分类':'男生分类'}}</div>
        <div>
          <div v-for="(a,$index1) in i">
            <div v-for="(a,$key,$index) in a" style="overflow: hidden;">
              <div class="img" :style="{backgroundPositionY:($index2*4+$index1)*-48.56+'px'}"></div>
              <div style="float: left;">
                <div>{{$key}}</div>
                <div>
                  <span v-for="(c,$index) in a.list">{{c}} {{$index==a.list.length-1?'':'|'}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      list: ""
    };
  },
  created() {
    this.$http
      .post(
        "http://content.shuqireader.com/webapi/rank/classrelation?_=1582421748856",
        {
          type: 1,
          timestamp: 1582421748856,
          sign: "74ef2fb43a8f09b68831b12fa3c7a3ac",
          shuqi_h5: ""
        },
        {
          emulateJSON: true
        }
      )
      .then(data => {
        this.list = data.body.data;
      });
  }
};
</script>
<style>
.img {
  width: 36px;
  height: 36.5px;
  float: left;
  background: url(img/6.jpg);
  background-size: 100%;
}
</style>
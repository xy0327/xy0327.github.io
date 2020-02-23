<template>
  <div>
    <mt-header title="女生专区" style="background-color:#fff;color:#000">
      <router-link to="/" slot="left" style="color:#00c98d;">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" style="color:#00c98d"></mt-button>
    </mt-header>
    <div>
      <div style="padding:10px 0">
        <h3
          style="line-height:1;border-left: 2px #00c98d solid;padding-left: 1rem;font: 1rem 'Helvetica Neue',Helvetica,STHeiTi,sans-serif;"
        >主编力荐</h3>
      </div>
      <div style="overflow:hidden;padding:16px 0 16px 16px">
        <div class="n_con" v-for="i in n_list">
          <div class="n_pic">
            <img :src="i.cover" alt />
          </div>
          <div class="n_text">
            <p class="n_tt">{{i.title}}</p>
            <p class="n_ct">{{i.author}}</p>
          </div>
        </div>
      </div>

      <div class="n_list">
        <div v-for="i in n_list">
          <span>{{i.title}}</span>
          <p class="n_list_text">{{i.desc}}</p>
          <i class="a1">连载</i>
          <i class="a2">{{i.category}}</i>
        </div>
      </div>
      <div class="hyh">换一换</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n_list: "",
      n_list1: ""
    };
  },
  created() {
    this.$http
      .get(
        "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E7%8E%8B%E5%A6%83&sort=monthHot&_=1582376577433",
        {
          params: {
            do: "is_caterank",
            p: 1,
            page: 1,
            words: "",
            shuqi_h5: "",
            onlyCpBooks: 1,
            tag: "王妃",
            sort: "monthHot",
            _: 1582376577433
          }
        }
      )
      .then(data => {
        this.n_list = data.data.data.slice(0, 4);
        this.n_list1 = data.data.data.slice(5, 9);
      });
  }
};
</script>

<style>
.n_con {
  float: left;
  width: 22%;
  padding-right: 10px;
}
.n_pic {
  display: inline-block;
  font-size: 0;
}
.n_pic img {
  width: 83px;
  height: 110px;
}
.n_text {
  width: 100%;
  font-size: 0.16rem;
}
.n_tt {
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2;
  white-space: nowrap;
}
.n_ct {
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
  color: #999;
  white-space: nowrap;
}


.n_list {
  border-top: 1px #999 solid;
}
.n_list_text {
    overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
  white-space: nowrap;
}
.n_list i {
  position: absolute;
  top: 1.5rem;
  line-height: 2;
  padding: 0 5px;
  border-radius: 5px;
  display: inline-block;
  font-style:normal;
  font-size: .5rem;
}
.n_list .a1 {
  right: 4.5rem;
  border: 1px solid #70a7e3;
  color: #70a7e3;
}
.n_list .a2 {
  position: absolute;
  right: 1rem;
  border: 1px solid rgba(153,153,153,.3);
  color: #999;
}
.n_list div {
  border-top: #ccc 1px solid;
  margin-bottom: 0.1875rem;
  position: relative;
  padding:1rem;
}
.n_list span {
  font-size: 1rem;
  font-weight: normal;
  line-height: 2;
}

.hyh {
  line-height: 3;
  border-top: 1px solid #ccc;
  border-bottom: 0.125rem solid #ccc;
  text-align: center;
  font-size: 1rem;
}
</style>
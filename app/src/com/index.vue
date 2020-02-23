<template>
  <div>
    <mt-header title="首页" style="background-color:#fff;color:#000"></mt-header>
    <div class="nav">
      <ul>
        <li>
          <a href="#/no1">
            <div class="h_pic">
              <img src="../assets/1.jpg" alt />
            </div>
            <p>分类</p>
          </a>
        </li>
        <li>
          <a href="#/no2">
            <div class="h_pic">
              <img src="../assets/2.jpg" alt />
            </div>
            <p>排行</p>
          </a>
        </li>
        <li>
          <a href="#/no3">
          <div class="h_pic">
            <img src="../assets/3.jpg" alt />
          </div>
            <p>女频</p>
          </a>
        </li>
        <li>
          <a href="#/no4">
            <div class="h_pic">
              <img src="../assets/4.jpg" alt />
            </div>
            <p>男频</p>
          </a>
        </li>
        <li>
          <a href="#/no5">
            <div class="h_pic">
              <img src="../assets/5.jpg" alt />
            </div>
            <p>书单</p>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <img
        src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg"
        alt
        style="width:100%"
      />
    </div>

    <div style="padding:1px 0">
      <h3
        style="line-height:1;border-left: 2px #00c98d solid;padding-left: 1rem;font: 1rem 'Helvetica Neue',Helvetica,STHeiTi,sans-serif;"
      >精品推荐</h3>
      <div style="overflow:hidden;padding:16px 0 16px 16px">
        <div class="n_con" v-for="i in h_list">
          <div class="n_pic">
            <img :src="i.cover" alt />
          </div>
          <div class="n_text">
            <p class="n_tt">{{i.title}}</p>
            <p class="n_ct">{{i.author}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hyh">换一换</div>
    <div>
      <div style="padding:10px 0">
        <h3
          style="line-height:1;border-left: 2px #00c98d solid;padding-left: 1rem;font: 1rem 'Helvetica Neue',Helvetica,STHeiTi,sans-serif;"
        >女生美文</h3>
      </div>
      <div style="overflow:hidden;padding:16px 0 16px 16px">
        <div class="n_con" v-for="i in h_list1">
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
        <div v-for="i in h_list">
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
      h_list: "",
      h_list1: ""
    };
  },
  created() {
    this.$http
      .get(
        "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1571661503726",
        {
          params: {
            do: "is_caterank",
            p: 1,
            page: 1,
            words: "",
            shuqi_h5: "",
            onlyCpBooks: 1,
            secondCate: this.book_name,
            sort: "monthHot",
            _: 1571661503726
          }
        }
      )
      .then(data => {
        this.h_list = data.data.data.slice(0, 4);
        this.h_list1 = data.data.data.slice(5, 9);
      });
  }
};
</script>

<style>
.nav {
  padding: 0.3rem 0 0.24rem;
  margin: 0 0.4rem;
}
.nav ul {
  overflow: hidden;
  display: flex;
}
.nav ul li {
  text-align: center;
  flex: 1;
}
.nav ul li a {
  color: #333;
}
.nav ul li a p {
  font-size: 0.5rem;
  line-height: 2;
  color: #999;
}
.h_pic{
  margin: 0 auto;
  width: 3rem;
  height: 3rem;
}
.h_pic img {
  width: 100%;
  height: 100%;
}
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
  font-size: 0.3rem;
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
  font-style: normal;
  font-size: 0.5rem;
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
  color:#999;
}
.n_list div {
  border-top: #ccc 1px solid;
  margin-bottom: 0.1875rem;
  position: relative;
  padding: 1rem;
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
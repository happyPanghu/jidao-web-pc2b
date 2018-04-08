<template>
  <div class="left-side">
    <div class="left-inside">
      <div>
        {{ $store.state.company }}
      </div>
      <ul>
        <li class="haha">
          <router-link to="/">首页</router-link>
        </li>
        <li class="haha">
          <router-link to="/sec">第二页</router-link>
        </li>
        <li class="haha">
          <router-link to="/thi">第三页</router-link>
        </li>
        <li class="haha">
          <router-link to="/forth">第四页</router-link>
        </li>
      </ul>
      <button @click="send();">点我啊</button>
    </div>
  </div>
</template>
<script>
import store from '@/vuex/store'
export default {
  data() {
    return {
      msg: 'sfssd'
    }
  },
  store,
  methods: {
    send() {
      this.$ajax.get('https://dev2b.jidao.ren/applyer/test/74').then(respone => {
        this.msg='成功';
        alert("1");
      }, respone => {
        alert("2")
      }).catch(respone =>{
        alert(this.data);
      })
    }
  }
}

</script>
<style scoped lang="less">
@import '../../../static/test';
.haha {
  color: @orange !important;
  line-height: 50px;
}

.left-side {
  list-style-type: none;
  width: 140px;
  height: 100%;
  float: left;
  position: fixed;
  overflow-x: hidden;
  background: #eaeaea;
}

.left-inside {
  width: 160px;
  height: 100%;
  overflow-y: scroll;
}


li,
ul {
  width: 160px;
}

</style>

<template>
  <div id="app">
    <el-container class="main-content">
      <el-header>
        <h2 class="main-title">游戏资讯统计</h2>
        <button class="menu-toggle" @click="menuToggle()"></button>
      </el-header>
      <el-container class="mainBox">
        <el-aside class="menu" :class="{ 'close': !isOpen }">
          <el-menu
            :default-active="indexPath"
            class="el-menu-vertical-demo"
            text-color="#666"
            :router="true"
            active-text-color="#5694f1"
            @select="select">
            <el-menu-item index="/" >
              <i class="icon-nav icon-quick"></i>
              <span slot="title">快速浏览页</span>
            </el-menu-item>
            <el-menu-item index="/list" >
              <i class="icon-nav icon-list"></i>
              <span slot="title">资讯列表</span>
            </el-menu-item>
            <el-menu-item index="/data" @select="select">
              <i class="icon-nav icon-statistics"></i>
              <span slot="title">统计分析</span>
            </el-menu-item>
            <el-menu-item index="/setting" @select="select">
              <i class="icon-nav icon-set"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      indexPath: this.$route.path,
      isOpen:true
    }
  },
  methods: {
    select (index) {
      this.indexPath = index
    },
    menuToggle(){
      this.isOpen = !this.isOpen;
    }
  },
  mounted: function () {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
html,body,.el-container,.el-main{
  height: 100%;
}
.main-content{
  min-width: 1280px;
  overflow: auto;
}
.el-header{
  text-align: left;
  height: 40px !important;
  line-height: 40px;
  background: rgba(0,0,0,0.75);
  color: #fff;
}
.el-aside{
  background: #404040;
}
.el-menu{
  border: 0;
  padding-top: 30px;
}
.el-menu-item span{
  display: inline-block;
  width: 56px;
  text-align: left;
}
.el-main{
  padding: 0;
}
.menu{
  width: 200px !important;
  transition: all .3s ease-in-out;
}
.menu.close{
  width: 70px !important;
}
.menu.close li span{
  opacity: 0;
}
.mainBox{
  height: calc(100% - 40px);
}
  .el-header{
    width: 100%;
    height: 60px !important;
    background: #5694f1;
    padding: 0;
  }
  .main-title{
    width: 200px;
    height: 100%;
    background: #4d85d8;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    float: left;
  }
  .el-aside{
    background: #fff;
  }
  .el-menu-vertical-demo li{
    height: 49px;
    line-height: 49px;
    background: #fff;
    font-size: 16px;
    margin-bottom: 15px;
    text-align: left;
    padding-left: 25px !important;
  }
  .el-menu-item.is-active{
    background: #eef4fe;
  }
  .el-menu-item [class^=el-icon-]{
    font-size: 25px;
  }
  .menu-toggle{
    width: 25px;
    height: 22px;
    background: url("./assets/images/header-btn.png") no-repeat center;
    border: 0;
    margin:18px 20px;
    cursor: pointer;
  }
  .icon-nav{
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 30px;
  }
  .icon-quick {
    background: url('./assets/images/icon_nav_1.png') no-repeat center;
  }
  .icon-list {
    background: url('./assets/images/icon_nav_3.png') no-repeat center;
  }
  .icon-statistics {
    background: url('./assets/images/icon_nav_5.png') no-repeat center;
  }
  .icon-set {
    background: url('./assets/images/icon_nav_7.png') no-repeat center;
  }
  .is-active .icon-quick {
    background: url('./assets/images/icon_nav_2.png') no-repeat center;
  }
  .is-active .icon-list {
    background: url('./assets/images/icon_nav_4.png') no-repeat center;
  }
  .is-active .icon-statistics {
    background: url('./assets/images/icon_nav_6.png') no-repeat center;
  }
  .is-active .icon-set {
    background: url('./assets/images/icon_nav_8.png') no-repeat center;
  }
</style>

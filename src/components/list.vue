<template>
  <section class="list">
    <el-row style="margin-bottom:20px;" class="top">
      <el-col>
        <p class="viewTitle">咨询列表</p>
      </el-col>
    </el-row>

    <el-row v-loading="loading">
      <div class="list-content">
        <el-row style="margin-bottom:20px;" class="top">
          <el-col>
            <el-input v-model="param.content" placeholder="请输入文章内容"></el-input>
            <el-input v-model="param.type" placeholder="请输入文章分类"></el-input>
            <el-input v-model="param.title" placeholder="请输入标题"></el-input>
            <el-select v-model="param.sourceId" placeholder="请选择文章来源">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-date-picker
              v-model="time"
              format="yyyy-MM-dd"
              value-format="timestamp"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="changeTime">
            </el-date-picker>
            <el-button type="danger" @click="loadData">搜索</el-button>
          </el-col>
        </el-row>
          <ul>
            <li v-for="(item, index) in tableData" :key="index">
              <div class="img-box">
                <img :src="item.imageUrl">
              </div>
              <div class="desc">
                <h2><a :href="item.url" target="_blank">{{ item.title }}</a> <span class="tag">{{item.type}}</span></h2>
                <p class="intro">
                  <span>{{ item.contentBreviary }}</span>
                  <a @click="details(item)" target="_blank">查看详情</a>
                </p>
                <div class="about">
                  相关游戏：
                  {{ item.includeGames }}
                </div>
                <div class="source">
                  <span class="pv">
                    <i class="el-icon-view"></i>
                    浏览量：{{ item.hot }}  &nbsp;&nbsp;&nbsp;&nbsp;{{ item.releaseTime | dateFtt }}
                  </span>
                  文章来源：
                  {{ item.source }}
                </div>
              </div>
            </li>
          </ul>
      </div>
    </el-row>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total"
      @current-change="current"
      class="page"
    >
    </el-pagination>
    <el-dialog
      :title="title"
      :visible.sync="isShow"
      width="50%">
      <article v-html="content"></article>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="isShow = false">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
      isShow: false,
      value1: '',
      total: 0,
      param: {
        page: 1,
        pageSize: 10,
        sourceId: '',
        content: '',
        type: '',
        title: '',
        startDate: '',
        endDate: ''
      },
      options: [{
        label: '全部网站',
        value: '0'
      },{
        label: '游研社',
        value: '1'
      }],
      loading: false,
      content: '',
      time: [],
      title: ''
    }
  },
  methods: {
    loadData: function () {
      this.loading = true
      this.tableData = []
      this.axios.post('api/article/page', qs.stringify(this.param)).then(res => {
        this.loading = false
        if(res.data.code == '200') {
          this.tableData = res.data.data.content;
          this.total = res.data.data.total
        }
      })
    },
    details: function (item) {
      this.title = item.title
      this.axios.post('api/article/content', qs.stringify({articleId: item.id})).then(res => {
        if(res.data.code == '200') {
          this.content = res.data.data.content
          this.isShow = true
        }
      })
    },
    current: function (page) {
      this.param.page = page;
      this.loadData();
    },
    changeTime: function (time) {
      console.log('-------')
      console.log(time)
      if (time) {
        this.param.startDate = JSON.stringify(time[0]).slice(0, JSON.stringify(time[0]).length-3);
        this.param.endDate = JSON.stringify(time[1]).slice(0, JSON.stringify(time[1]).length-3);
      } else {
        this.param.startDate = ''
        this.param.endDate = ''
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  padding: 30px 33px;
  background: #edf4f7;
}
.viewTitle{
  text-align: left;
  font-size: 16px;
  color: #666;
}
.el-pagination{
  text-align: right;
  padding-top: 50px;
}
/deep/.el-pagination .el-pager li:hover{
  color: rgb(255, 208, 75) !important;
}
/deep/.el-pagination .el-pager li.active{
  background-color: #404040 !important;
}
.cz{
  font-size: 12px;
  color: #8d8dcc;
  cursor: pointer;
}
.el-input,.el-select{
  width: 200px;
  text-align: left;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
/deep/.el-input .el-input__inner{
  width: 200px;
  height: 34px;
  line-height: 28px;
  background: #f6fafe;
  border-color: #cfe3fb;
  color: #333;
  padding-left: 10px;
}
/deep/.el-select .el-input--suffix .el-input__inner{
  width: 200px;
  height: 34px;
  line-height: 28px;
  background: #f6fafe;
  border-color: #cfe3fb;
  color: #ccc;
}
/deep/.el-date-editor .el-range__icon{
  font-size: 16px;
  line-height: 27px;
}
/deep/.el-range-editor.el-input__inner{
  line-height: 28px;
  width: 320px;
  height: 34px;
  float: left;
  margin-right: 10px;
  background: #f6fafe;
  border-color: #cfe3fb;
  color: #ccc;
}
/deep/.el-range-editor .el-range-input{
  background: none;
}
/deep/.el-date-editor .el-range-separator{
  width: 30px;
  line-height: 24px;
}
.top .el-button{
  float: left;
  height: 34px;
  line-height: 34px;
  padding: 0 20px;
}
.top .el-button:focus{
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>
<style>
article{
  height: 500px;
  overflow: auto;
}
article::-webkit-scrollbar{
  width:5px;
  height:2px;
  background:#ccc;
  border-radius:10px;
}
article::-webkit-scrollbar-thumb{
  display:block;
  width:6px;
  margin:0 auto;
  border-radius: 10px;
  background: #333
}
article p{
  padding: 10px;
  text-align: left;
  text-indent: 2em;
}
article .picbox{
  text-indent: 0;
}
article img{
  width: 100% !important;
  height: auto;
}
.el-table a{
  color: #333;
}
.list-content{
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
.list-content li{
  text-align: left;
  list-style: none;
  border-bottom: solid 1px #f7f7f7;
  padding: 20px 0;
}
.list-content li:last-child{
  border-bottom: none;
}
.list-content .img-box{
  display: inline-block;
  width: 200px;
  height: 128px;
  overflow: hidden;
  margin-right: 15px;
  vertical-align: middle;
}
.list-content .img-box img{
  width: 100%;
}
.list-content .desc{
  display: inline-block;
  width: calc(100% - 220px);
  vertical-align: middle;
}
.list-content h2{
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}
.list-content h2 a{
  color: #333;
  text-decoration: blink;
}
.list-content .intro,.about,.source{
  font-size: 14px;
  color: #999;
  line-height: 20px;
  margin-bottom: 7px;
}
.list-content .intro span{
  display: inline-block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  max-width: calc(100% - 90px);
  vertical-align: middle;
}
.list-content .intro a{
  color: #5694f1;
  padding-left: 10px;
  cursor: pointer;
}
.list-content .tag{
  font-size: 14px;
  color: #f13f40;
  display: inline-block;
  vertical-align: middle;
  border: solid 1px #f13f40;
  border-radius: 3px;
  line-height: 18px;
  padding: 0 2px;
  margin-left: 10px;
  font-weight: normal;
}
.list-content .pv{
  float: right;
}
.el-button--danger{
  background: #5694f1;
  border-color: #5694f1;
}
.el-button--danger:hover,.el-button--danger:active{
  background: #669ef1;
  border-color: #669ef1;
}
.page.el-pagination .el-pager li{
  border-radius: 4px;
  color: #555;
}
.page.el-pagination .el-pager li.active{
  background: #5694f1 !important;
}
</style>


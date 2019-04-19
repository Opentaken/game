<template>
  <section class="setting">
    <el-row style="margin-bottom:20px;" class="top">
      <el-col>
        <p class="viewTitle">设置</p>
      </el-col>
    </el-row>
    <el-form>
      <el-form-item>
        <label class="icon icon-date">每日爬取时间：</label>
        {{form.time}}
      </el-form-item>
      <el-form-item>
        <label class="icon icon-clock">上次爬取时间：</label>
        {{form.time2}}
      </el-form-item>
      <el-form-item>
        <label class="icon icon-sand-clock">爬取状态：</label>
        {{form.pq}}
      </el-form-item>
      <el-form-item label="">
        <el-button>手动爬取</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="选择网站爬取" :visible.sync="isShow"  width="446px">
      <el-form label-width="130px" size="mini" class="source-list">
        <el-col :span="12">
          <el-checkbox >游研社</el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox >GameRes游资网</el-checkbox>
        </el-col>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="crawling()" type="primary">确定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      isShow: false,
      form:{
        time:'上午8点',
        time2:'2018-03-29',
        pq: '爬取完毕'
      }
    }
  },
  mounted() {
  },
  methods: {
    crawling:function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viewTitle{
  text-align: left;
  font-size: 16px;
  color: #666;
}
.setting{
  padding: 30px;
}
/deep/.el-form-item .el-form-item__content{
  text-align: left
}
.el-form-item{
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
}
.el-form{
  padding-left: 25px;
}
.el-button{
  width: 138px;
  height: 36px;
  background: #4d85d8;
  border-color: #4d85d8;
  color: #fff;
  line-height: 34px;
  padding: 0;
}
.el-button:hover,.el-button:active{
  background: #5694f1;
  border-color: #5694f1;
}
.icon{
  background: no-repeat left center;
  padding-left: 26px;
}
/deep/.el-dialog__header{
  height: 40px;
  color: #666;
  font-size: 14px;
  border-bottom: solid 1px #ecf2fa;
  text-align: left;
}
.icon-date{
  background-image: url("../assets/images/icon-date.jpg");
}
.icon-clock{
  background-image: url("../assets/images/icon-clock.jpg");
}
.icon-sand-clock{
  background-image: url("../assets/images/icon-sand-clock.jpg");
}
.dialog-footer{
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
.source-list{
  text-align: left;
  font-size: 14px;
  color: #666;
}
</style>

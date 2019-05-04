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
        {{loadData.reptileTime | dateformat}}
      </el-form-item>
      <el-form-item>
        <label class="icon icon-sand-clock">爬取状态：</label>
        {{loadData.reptileCount == loadData.finishCount ? '爬取完毕' : '爬取中'}}
      </el-form-item>
      <el-form-item label="">
        <el-button @click="submit">一键爬取</el-button>
        <el-button @click="openDialog">网站爬取</el-button>
      </el-form-item>
    </el-form>

    <!--<el-dialog title="选择网站爬取" :visible.sync="isShow"  width="446px">
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
    </el-dialog>-->

    <div class="dialog" v-if="isShow">
      <div class="dialog-bg" @click="closeDialog"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>选择网站爬取</h2>
          <button class="close-btn" @click="closeDialog"></button>
        </div>
        <div class="dialog-body">
          <el-form label-width="130px" size="mini" class="source-list">
            <el-checkbox-group v-model="checkList">
              <el-col :span="12" v-for="(item, index) in checkData" :key="index">
                <el-checkbox :label="item.id" class="set-in-checkbox">{{item.webName}}</el-checkbox>
              </el-col>
            </el-checkbox-group>
          </el-form>
        </div>
        <div class="dialog-footer">
          <el-button @click="submit" type="primary">确定</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import qs from 'qs'
export default {
  name: 'setting',
  data () {
    return {
      isShow: false,
      form:{
        time:'上午8点',
        time2:'2018-03-29',
        pq: '爬取完毕'
      },
      checkData: [],
      checkList: [],
      loadData: {
        reptileTime: '',
        reptileCount: '',
        finishCount: ''
      }
    }
  },
  mounted() {
    this.loading()
  },
  methods: {
    loading: function () {
      this.axios.post('api/reptile/getReptileRecord').then(res => {
        console.log(res)
        if(res.data.code == '200') {
          this.loadData = res.data.data;
        }
      })
    },
    openDialog:function(){
      this.axios.post('api/web/list').then(res => {
        this.loading = false
        if(res.data.code == '200') {
          this.checkData = res.data.data;
          this.isShow = true;
        }
      })
    },
    submit(){
      if (this.loadData.reptileCount != this.loadData.finishCount) {
        this.$message({
          message: '爬虫程序执行中，请等待',
          type: 'error'
        });
        return false
      }
      this.isShow = false;
      this.axios.post('api/reptile/start', qs.stringify({sourceIds: this.checkList.join(',')})).then(res => {
        if(res.data.code == '200') {
          this.checkList = []
          this.$message({
            message: res.data.message,
            type: 'success'
          });
          this.loading();
        } else {
          this.checkList = []
          this.$message({
            message: res.data.message,
            type: 'success'
          });
        }
      })
    },
    closeDialog(){
      this.isShow = false;
      this.checkList = [];
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
/*彈窗*/
.dialog-bg{
  background: #000;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.dialog-content{
  width: 445px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top:50%;
  margin: -166px 0 0 -222px;
  left: 50%;
}
.dialog-header{
  height: 42px;
  border-bottom: solid 1px #ecf2fa;
  padding: 0 18px;
  position: relative;
}
.dialog-header h2{
  font-size: 14px;
  color: #666;
  line-height: 41px;
  text-align: left;
}
.dialog-header .close-btn{
  width: 30px;
  height: 30px;
  background: url("../assets/images/close-btn.png") no-repeat center;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 9px;
  top: 6px;
}
.dialog-body{
  padding: 20px 25px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
}
.set-in-checkbox{
  margin: 8px 0;
}
/deep/.set-in-checkbox .el-checkbox__inner::after{
        border-color: #4d85d8;
      }
/deep/.set-in-checkbox .el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #fff;
      }
/deep/.set-in-checkbox .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #666;
      }

.dialog-footer{
  padding: 6px 0 22px;
}
.dialog-footer .el-button{
  width: auto;
  padding: 0 20px;
}
</style>

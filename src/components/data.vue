<template>
  <section class="data">
    <el-row style="margin-bottom:20px;" class="top">
      <el-col>
        <p class="viewTitle">统计分析</p>
      </el-col>
    </el-row>
    <div>
      <ul class="data_ul">
        <li>
          <div class="num">
            <p>{{topCount.rate.total}}</p>
            <span>总数量</span>
          </div>
          <div class="data_bl">
            <div class="tab-title">
              <span>日同比</span>
              <span>周同比</span>
            </div>
            <div class="tab-body">
              <span :class="topCount.rate.dayUpOrDown == '1' ? 'up_1' : topCount.rate.dayUpOrDown == '0' ? 'down_1' : ''">{{topCount.rate.dayPercent}}</span>
              <span :class="topCount.rate.weekUpOrDown == '1' ? 'up_1' : topCount.rate.weekUpOrDown == '0' ? 'down_1' : ''">{{topCount.rate.weekPercent}}</span>
            </div>
          </div>
        </li>
        <li>
          <div class="num">
            <p>{{topCount.dayCount.dayChangCount}}</p>
            <span>日数量变化</span>
          </div>

          <div class="data_bl">
            <div id="myChart1" :style="{width: '100%', height: '148px',top: '30px'}"></div>
          </div>
        </li>
        <li>
          <div class="num">
            <p>{{topCount.weekCount.weekChangCount}}</p>
            <span>周数量变化</span>
          </div>
          <div class="data_bl">
            <div id="myChart2" :style="{width: '100%', height: '148px',top: '30px'}"></div>
          </div>
        </li>
      </ul>
    </div>
    <div style="overflow: hidden">
      <div class="analytical-l">
        <el-row style="margin-bottom:20px;" class="top">
          <el-col>
            <p class="viewTitle">游戏数量统计图</p>
            <div class="cartogram-tab" v-if="false">
              <button @click="drawCartogram('game')">热门游戏</button>
              <button @click="drawCartogram('tag')">热门话题</button>
            </div>
          </el-col>
        </el-row>
        <div class="bb" v-loading="loading">
          <div id="myChart" :style="{width: '100%', height: '600px'}"  v-if="type == 'game'"></div>
          <div id="myChart3" :style="{width: '100%', height: '600px'}" v-if="type == 'tag'"></div>
        </div>
      </div>

      <div class="analytical-r">
        <el-row style="margin-bottom:20px;" class="top">
          <el-col>
            <p class="viewTitle">变化量排行</p>
          </el-col>
        </el-row>
        <div class="rank_box">
          <h4>变化量排行</h4>
          <p><span>排名</span><span>游戏名称</span><span>总数</span><span>变化百分百</span><span>变化量</span></p>
          <ul class="tj">
            <li v-for="(item, index) in rightGame" :key="index"><span :class="index == '0' ? 'one' : index == '1' ? 'two' : index == '2' ? 'three' : ''">{{index+1}}</span><span>{{item.gameName}}</span><span>{{item.total}}</span><span>{{item.changePercent}}</span><span :class="item.changeCount > 0 ? 'up' : 'down'">{{Math.abs(item.changeCount)}}</span></li>
          </ul>
        </div>
      </div>

    </div>

  </section>
</template>

<script>

import echarts from 'echarts'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      type:'game',
      gameCount: {
        gameName: [],
        total: []
      },
      rightGame: [],
      topCount: {
        rate: {
          dayPercent: '',
          dayUpOrDown: '',
          total: '',
          weekPercent: '',
          weekUpOrDown: ''
        },
        dayCount: {
          changList: [],
          dayChangCount: ''
        },
        weekCount: {
          changList: [],
          weekChangCount: ''
        }
      },
      dayStatistics:{
        date: [],
        total: []
      },
      weekStatistics:{
        date: [],
        total: []
      },
      loading: false, // 数量统计图loading状态
      loading_article: false, // 上方统计图loading状态
      loading_game: false, // 游戏变化量loading状态
    }
  },
  mounted() {
    this.gameCounts();
    this.articleChangRank();
    this.changeRank();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例

        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))

        // 绘制图表

        myChart1.setOption({
          tooltip: {},
          xAxis: {
            type: 'category',
            boundaryGap: false,
            show : false,
            data: this.dayStatistics.date
          },
          yAxis: {
            show : false,
            type: 'value'
          },
          series: [{
            smooth:true,
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                  [
                    {offset: 0, color: '#b6d6fa'},
                    {offset: 0.5, color: '#d7fdfb'},
                    {offset: 1, color: '#fff'}
                  ])
              }
            },
            itemStyle : {
              symbol:"circle",
              normal : {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                  [
                    {offset: 0, color: '#0975ef'},
                    {offset: 0.5, color: '#d7fdfb'},
                    {offset: 1, color: '#fff'}
                  ]), //改变折线点的颜色
                lineStyle:{
                  color:'#0975ef'
                },
                borderColor: '#007fed'
              }
            },
            areaStyle: {},
            data: this.dayStatistics.total
          }]
        });
        myChart2.setOption({
        tooltip: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show : false,
          data: this.weekStatistics.date
        },
        yAxis: {
          show : false,
          type: 'value'
        },
        series: [{
          smooth:true,
          type: 'line',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                [
                  {offset: 0, color: 'red'},
                  {offset: 0.5, color: 'pink'},
                  {offset: 1, color: '#ddd'}
                ]) //改变区域颜色 暂时没用
            }
          },
          itemStyle : {
            normal : {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                [
                  {offset: 0, color: '#ebd9f1'},
                  {offset: 0.5, color: '#fde2f6'},
                  {offset: 1, color: '#fff'}
                ]), //改变折线点的颜色
              lineStyle:{
                color:'#d06ece'
              },
              itemStyle:{
                color:'#d06ece'
              },
              borderColor: '#d06ece'
            }
          },
          areaStyle: {},
          data: this.weekStatistics.total
        }]
      });
        // // 绘制图表
        // this.drawGame();
    },
    drawGame(){
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: '游戏数量统计图',
          x:'center',
          y:'top',
          textAlign:'center',
          textStyle: {    //文字样式
            color: "#666",
            fontSize: 20
          }
        },
        tooltip: {},
        grid: { // 控制图的大小，调整下面这些值就可以，
          x: 100,//控制x轴文字与底部的距离
          y2: 100 // y2可以控制倾斜的文字狱最右边的距离，放置倾斜的文字超过显示区域
        },
        xAxis: {
          type: 'category',
          data: this.gameCount.gameName,
          axisLabel: {
            interval: 0,    //强制文字产生间隔
            rotate: 45,     //文字逆时针旋转45°
            textStyle: {    //文字样式
              color: "#999",
              fontSize: 12
            }
          }
        },
        yAxis: {},
        series: [
          {itemStyle:{
            //柱形图圆角，鼠标移上去效果
            emphasis: {
              barBorderRadius: [20, 20, 20, 20]
            },
            normal:{
              //柱形图圆角，初始化效果
              barBorderRadius:[20, 20, 20, 20],
              color:new echarts.graphic.LinearGradient(0, 0, 0, 1,
                [
                  {offset: 0, color: '#7bc8ff'},
                  {offset: 0.5, color: '#56b2fa'},
                  {offset: 1, color: '#359df5'}
                ])
            }
          },
            type: 'bar',
            barWidth : 20,//柱图宽度
            data: this.gameCount.total
          }]
      });
    },
    drawTag(){
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      myChart3.setOption({
        title: {
          text: '标签数量统计',
          x:'center',
          y:'top',
          textAlign:'center',
          textStyle: {    //文字样式
            color: "#666",
            fontSize: 20
          }
        },
        tooltip: {},
        grid: { // 控制图的大小，调整下面这些值就可以，
          x: 100,//控制x轴文字与底部的距离
          y2: 100 // y2可以控制倾斜的文字狱最右边的距离，放置倾斜的文字超过显示区域
        },
        xAxis: {
          type: 'category',
          data: ["口袋妖怪复刻","火焰纹章","指环王","小叮当","忍者神龟3","神秘海域","群星","刺客信条：启示录","荒野大镖客2","王国风云","猎鹰时代","只狼", '绝地求生', '救赎'],
          axisLabel: {
            interval: 0,    //强制文字产生间隔
            rotate: 45,     //文字逆时针旋转45°
            textStyle: {    //文字样式
              color: "#999",
              fontSize: 12
            }
          }
        },
        yAxis: {},
        series: [
          {itemStyle:{
            //柱形图圆角，鼠标移上去效果
            emphasis: {
              barBorderRadius: [20, 20, 20, 20]
            },
            normal:{
              //柱形图圆角，初始化效果
              barBorderRadius:[20, 20, 20, 20],
              color:new echarts.graphic.LinearGradient(0, 0, 0, 1,
                [
                  {offset: 0, color: '#feaea2'},
                  {offset: 0.5, color: '#fe8d86'},
                  {offset: 1, color: '#fd7371'}
                ])
            }
          },
            name: '数量',
            type: 'bar',
            barWidth : 20,//柱图宽度
            data: [ 22, 36, 13, 30, 20, 20, 36, 10, 10, 20, 36, 10, 10, 20]
          }]
      });
    },
    drawCartogram(type){
      this.type = type;
      setTimeout(res => {
        if(type == 'tag'){
          this.drawTag()
        }else {
          this.drawGame()
        }
      })
    },
    gameCounts(){
      this.loading = true
      this.axios.post('api/statistic/gameCount').then(res => {
        this.loading = false
        if(res.data.code == '200') {
          res.data.data.forEach(item => {
            this.gameCount.gameName.push(item.gameName);
            this.gameCount.total.push(item.total);
            this.drawGame();
          });
        }
      })
    },
    articleChangRank(){
      this.loading_article = true
      this.axios.post('api/statistic/articleChangRank').then(res => {
        this.loading_article = false
        if(res.data.code == '200') {
          this.topCount = res.data.data
          this.topCount.dayCount.changList.forEach(item => {
            this.dayStatistics.date.push(this.$options.filters.dateFtt(item.date))
            this.dayStatistics.total.push(item.count)
          })
          this.topCount.weekCount.changList.forEach(item => {
            this.weekStatistics.date.push(this.$options.filters.dateFtt(item.startTime))
            this.weekStatistics.total.push(item.count)
          })
          this.drawLine()
        }
      })
    },
    changeRank(){
      this.loading_game = true
      this.axios.post('api/statistic/changeRank').then(res => {
        this.loading_game = false
        if(res.data.code == '200') {
          this.rightGame = res.data.data
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data{
  background: #edf4f7;
  padding: 30px;
  overflow: hidden;
  min-width: 1400px;
}
/*.data>div:nth-child(1){
  width: 100%;
  height: 200px;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  margin-bottom: 10px;
}
.data>div:nth-child(2) .bb{
  padding-top: 15px;
  width: calc(100% - 500px);
  height: calc(100% - 300px);
  float: left;
  border-right: 1px solid rgba(0,0,0, 0.15)
}*/
.viewTitle{
  text-align: left;
  font-size: 16px;
  color: #666;
}

.data_ul{
  list-style: none;
  width: 100%;
  height: 200px;
  background: #f0f2f5;
  display: flex;
  padding-top: 20px;
}
.data_ul li{
  flex: 1;
  margin-right: 30px;
  height: 150px;
  color: #333;
  float: left;
  text-align: left;
  padding: 38px 24px 8px 128px;
  border-radius: 10px;
  background: no-repeat 24px center #fff;
}
.data_ul li:first-child{
  background-image: url("../assets/images/icon-all.jpg");
}
.data_ul li:nth-child(2){
  background-image: url("../assets/images/icon-week.jpg");
}
.data_ul li:last-child{
  margin: 0;
  background-image: url("../assets/images/icon-day.jpg");
}
.data_ul li .num{
  display: inline-block;
  vertical-align: middle;
  width: calc(46% - 5px);
}
.data_ul li .data_bl{
  width: 54%;
  display: inline-block;
  vertical-align: middle;
}
.data_ul li span{
  font-size: 20px;
  color: #666
}
.data_ul li p{
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1;
  color: #666;
}
.data_bl{
  padding-top: 20px;
}
.tab-title,.tab-body{
  text-align: center;
  margin-bottom: 15px;
  color: #666;
  font-size: 20px;
  overflow: hidden;
}
.tab-title span,.tab-body span{
  width: 50%;
  float: left;
}
.tab-body{

}
.up_1::after{
  display: inline-block;
  content: '';
  width: 12px;
  height: 17px;
  background: url("../assets/images/icon-up.jpg") no-repeat center;
  margin-left: 7px;
}
.down_1::after{
  display: inline-block;
  content: '';
  width: 12px;
  height: 17px;
  background: url("../assets/images/icon-down.jpg") no-repeat center;
  margin-left: 7px;
}
#myChart1{
  margin-top: -90px;
  margin-left: -30px;
}
#myChart2{
  margin-top: -85px;
  margin-left: -30px;
}
.analytical-l{
  float: left;
  width: calc(100% - 600px);
  overflow: auto;
  position: relative;
}
.bb{
  background: #fff;
  border-radius: 10px;
  padding: 30px 0;
}
.analytical-r{
  width: 570px;
  float: right;
}
.rank_box{
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 15px 30px;
}
.rank_box h4{
  font-size: 20px;
  color: #666;
  line-height: 50px;
  font-weight: normal;
  margin: 16px 0 ;

}
.rank_box p{
  text-align: center;
  font-size: 14px;
  color: #666;
  overflow: hidden;
  margin-bottom: 8px;
}
.rank_box p span{
  float: left;
  width: 20%;
}

.tj{
  list-style: none;
  line-height: 30px;
  font-size: 14px;
  padding: 10px 0;
}
.tj li{
  margin: 10px 0 15px;
  text-align: center;
}

.tj i{
  font-style: normal;
  display: inline-block;
  font-size: 12px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 15px;
}
.tj span{
  display: inline-block;
  vertical-align: middle;
  width: calc(20% - 1.5px);
  font-size: 14px;
  color: #666;
}
.tj span.one{
  background: url('../assets/images/first.png') no-repeat center;
  font-size: 0;
}
.tj span.two{
  background: url('../assets/images/second.png') no-repeat center;
  font-size: 0;
}
.tj span.three{
  background: url('../assets/images/thirdly.png') no-repeat center;
  font-size: 0;
}
.tj span.down:after{
  display: inline-block;
  content: "";
  width: 12px;
  height: 18px;
  vertical-align: middle;
  background: url(../assets/images/icon-down.jpg) no-repeat right center;
  background-size: 80%;
  position: relative;
  top: -2px;
  left: 5px;
}
.tj span.up:after{
  display: inline-block;
  content: "";
  width: 12px;
  height: 18px;
  vertical-align: middle;
  background: url(../assets/images/icon-up.jpg) no-repeat right center;
  background-size: 80%;
  position: relative;
  top: -2px;
  left: 5px
}
.tab-cartogram{
  margin-top: 30px;
  width: 673px;
}
.cartogram-tab{
  position: absolute;
  top:48px;
  right: 20px;
}
.cartogram-tab button{
  display: inline-block;
  background: #51c5fe;
  color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 15px;
  border: 0;
  z-index: 99;
}
</style>

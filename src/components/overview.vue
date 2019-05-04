<template>
  <section class="overview">
    <el-row style="margin-bottom:20px;" class="top">
      <el-col>
        <p class="viewTitle">当前热点信息快览</p>
      </el-col>
    </el-row>
    <el-row v-loading="loading">
      <div class="overviewList" v-for="(item, index) in tableData" :key="index">
        <strong><span>{{item.webName}}</span></strong>
        <ul>
          <li v-for="(items, key) in item.articleList.slice(0, 5)" :key="key" :title="'标题：'+items.title+'；标签：'+items.type+'；点赞数/阅读数：'+items.hot">
            <a target="_blank" :href="items.url">
              <div class="img-box">
                <img :src="items.imageUrl">
              </div>
            </a>
            <a target="_blank" :href="items.url">
              <div class="overview-list-content">
                <h2>{{items.title}}</h2>
                <div class="desc">
                  <span class="pv">点赞数/浏览量：{{items.hot}}</span>
                  <span class="tag" v-for="(type, num) in items.typeList" :key="num">{{type}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- <div class="overviewList" v-for="(item, index) in tableData1" :key="index">
        <strong><span>{{item.webName}}</span></strong>
        <ul>
          <li v-for="(items, key) in item.articleList.slice(0, 5)" :key="key" :title="'标题：'+items.title+'；标签：'+items.type+'；点赞数/阅读数：'+items.hot">
            <a target="_blank" :href="items.url">
              <div class="img-box">
                <img :src="items.imageUrl">
              </div>
            </a>
            <a target="_blank" :href="items.url">
              <div class="overview-list-content">
                <h2>{{items.title}}</h2>
                <div class="desc">
                  <span class="pv">点赞数/浏览量：{{items.hot}}</span>
                  <span class="tag">{{items.type}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="overviewList" v-for="(item, index) in tableData2" :key="index">
        <strong><span>{{item.webName}}</span></strong>
        <ul>
          <li v-for="(items, key) in item.articleList.slice(0, 5)" :key="key" :title="'标题：'+items.title+'；标签：'+items.type+'；点赞数/阅读数：'+items.hot">
            <a target="_blank" :href="items.url">
              <div class="img-box">
                <img :src="items.imageUrl">
              </div>
            </a>
            <a target="_blank" :href="items.url">
              <div class="overview-list-content">
                <h2>{{items.title}}</h2>
                <div class="desc">
                  <span class="pv">点赞数/浏览量：{{items.hot}}</span>
                  <span class="tag">{{items.type}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="overviewList" v-for="(item, index) in tableData3" :key="index">
        <strong><span>{{item.webName}}</span></strong>
        <ul>
          <li v-for="(items, key) in item.articleList.slice(0, 5)" :key="key" :title="'标题：'+items.title+'；标签：'+items.type+'；点赞数/阅读数：'+items.hot">
            <a target="_blank" :href="items.url">
              <div class="img-box">
                <img :src="items.imageUrl">
              </div>
            </a>
            <a target="_blank" :href="items.url">
              <div class="overview-list-content">
                <h2>{{items.title}}</h2>
                <div class="desc">
                  <span class="pv">点赞数/浏览量：{{items.hot}}</span>
                  <span class="tag">{{items.type}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div> -->
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: false,
      tableData: [],
      tableData1: [{
        webName: '网易爱玩',
        articleList: [{
          author: "跳跳",
          contentBreviary: "在玩家们的话里话外，体现出的是一种冷漠。这种冷漠不仅仅体现在他们对于版权归属、对于正版盗版之争的毫不关心，更体现在他们对玩的这款盗版手游的漠然态度。我刚刚进入《纹章召唤》的官方群时，这里正爆发着一场激",
          createTime: 1555267528,
          hot: 32,
          id: 310,
          imageUrl: "http://alioss.yystv.cn/cover/213328348ec2982a9591fbd116b353f3.jpg",
          includeGames: "口袋妖怪复刻、火焰纹章：英雄、火纹英雄、贪玩纹章、纹章召唤、决斗之城",
          releaseTime: 1555181128,
          source: "游研社",
          sourceId: 1,
          title: "在盗版手游官方群的一周",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4918"
        },{
          author: "kong",
          contentBreviary: "不需要解释什么。前几天人类历经千辛万苦，终于通过好几个天文台跨国通力合作，拍到了一副黑洞的珍贵影像，并且为爱因斯坦的广义相对论提供了进一步的证据。说实在话，和人们平时习惯见到的宇宙照片做对比，这张黑洞",
          createTime: 1555267528,
          hot: 13,
          id: 309,
          imageUrl: "http://alioss.yystv.cn/cover/f094eff091b8bb336df69641c9452479.jpg",
          includeGames: "指环王",
          releaseTime: 1555181128,
          source: "游研社",
          sourceId: 1,
          title: "人类拍了黑洞的照片，下一步计划是和“她”结婚",
          type: "经典",
          url: "http://www.yystv.cn/p/4919"
        },{
          author: "沉迷真扎的白",
          contentBreviary: "*本文原载于微博@贞德蘸酱，游研社获授权转载上代务跌下了“神坛”。2019年4月2日，当Niconico上《兽娘动物园2》最终话的好评率突破2.8%的历史最低线，停留在2.6%的那一刻，上代务正式跌下",
          createTime: 1555267528,
          hot: 13,
          id: 308,
          imageUrl: "http://alioss.yystv.cn/cover/c7e51b88b2b0860c4a2f17c1776dbcc9.jpg",
          includeGames: "小叮当、佐贺偶像是传奇、烟草、游戏王ARC-V、偶像活动、兽娘动物园2、Newtype、兽娘动物园、兽娘2、NewType、FGO、哆啦A梦",
          releaseTime: 1555181128,
          source: "游研社",
          sourceId: 1,
          title: "“平成最屑动画”是如何炼成的？",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4920"
        },{
          author: "社长",
          contentBreviary: "大家周末好，一个多月不见，社长又回来和大家聊红白机了。其实“N合1”系列做到现在，有意思的红白机“小游戏”已经被讲得差不多了，我们之后可能会多讲些国内玩家比较熟悉的、容量更大的“高K”游戏。比如今天的",
          createTime: 1555267528,
          hot: 11,
          id: 307,
          imageUrl: "http://alioss.yystv.cn/cover/1b8b09005e5b79f479a54aefaebfbb8e.jpg",
          includeGames: "忍者神龟3、兔宝宝、外星战将",
          releaseTime: 1555181127,
          source: "游研社",
          sourceId: 1,
          title: "【红白机N合1】小时候打不通《外星战将》？你可能是盗版软件的受害者",
          type: "视频节目",
          url: "http://www.yystv.cn/p/4921"
        },{
          author: "青春喜相逢",
          contentBreviary: "每日登陆App记录自己的各种生理状况，还能得到1美元的奖励。前一段时间，外媒Kotaku的编辑写了一篇披露顶尖游戏开发商Bioware内幕的文章。根据媒体的调查，Bioware内部不但管理混乱，加班繁",
          createTime: 1555267528,
          hot: 3,
          id: 314,
          imageUrl: "http://alioss.yystv.cn/cover/6e29cd6586cd853c7b0a2f14a728ae47.jpg",
          includeGames: "神秘海域、华盛顿邮报、荒野大镖客2",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "从2013年开始，动视暴雪就通过APP来追踪员工的生理指标了",
          type: "经典",
          url: "http://www.yystv.cn/p/4914"
        },{
          author: "kong",
          contentBreviary: "比大乱斗出场角色更多的可能只有大乱斗圈子里的破事儿了。前两天在温哥华举行的一场《任天堂大乱斗Melee》（日版大乱斗DX）比赛中，使用胖丁的玩家在取得领先以后，利用自己的位移优势不断和对手的雪人兄弟保",
          createTime: 1555267535,
          hot: 10,
          id: 346,
          imageUrl: "http://alioss.yystv.cn/cover/23d37e3df5be7a16cf4eedced832c4ef.jpg",
          includeGames: "大乱斗WiiU、任天堂大乱斗Melee、大乱斗终极版、漫威大战卡普空",
          releaseTime: 1554393600,
          source: "游研社",
          sourceId: 1,
          title: "因为使用龟缩战术，《任天堂大乱斗》玩家受到了围攻",
          type: "经典",
          url: "http://www.yystv.cn/p/4879"
        },{
          author: "跳跳",
          contentBreviary: "“我们只是一群游戏玩家，不要忘记这位孩子、这位战士，这是我们唯一能做到的事了。”上个周六，一群使命召唤玩家在弗吉尼亚海滩组织了一次锦标赛，以此纪念一位逝去的战士。他们纪念的这位战士不是什么老兵，也不是",
          createTime: 1555267537,
          hot: 6,
          id: 355,
          imageUrl: "http://alioss.yystv.cn/cover/d0fe178229c81fb741cb5d793aa26d82.jpg",
          includeGames: "使命召唤：黑色行动、使命召唤",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "为了去世的孩子，玩家们组织了一场使命召唤比赛",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4870"
        },{
          author: "跳跳",
          contentBreviary: "《一小时人生》的玩家分成了两个泾渭分明、几乎毫无相同之处的群体。最开始，我以为《一小时人生》是《饥荒》或者《方舟》这样的生存冒险游戏，它们实在很像。在这些游戏中，玩家都需要填饱肚子、战胜野兽和疾病、伐",
          createTime: 1555267535,
          hot: 45,
          id: 354,
          imageUrl: "http://alioss.yystv.cn/cover/f2c76869eade291d6cc2899aa8f971d4.jpg",
          includeGames: "一小时人生、方舟、饥荒",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "在“一小时人生”里，普通玩家与夏娃们的悲喜剧",
          type: "推游",
          url: "http://www.yystv.cn/p/4872"
        },{
          author: "Kong",
          contentBreviary: "爽就一个字。前两天《雨中冒险2》发布的时候着实吓了我一跳。一方面这个游戏出现的实在有点突然，发售前也没有什么宣传。另外一方面，这个游戏看起来实在是和6年前的第一代差别实在是太大了。初代《雨中冒险》发布",
          createTime: 1555267535,
          hot: 14,
          id: 353,
          imageUrl: "http://alioss.yystv.cn/cover/83a46ce22a712db135a7a7c062008b63.jpg",
          includeGames: "雨中冒险、APEX传奇、雨中冒险2、无主之地",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "《雨中冒险2》没有雨也不算冒险，但依然无比过瘾",
          type: "推游",
          url: "http://www.yystv.cn/p/4873"
        },{
          author: "空白缠绕",
          contentBreviary: "自1943年世界上出现第一个自闭症病例至今，已经度过了漫长的76年，但大众对自闭症这一常见病症的认知还仅为一知半解。从2008年开始，4月2日被定为世界自闭症关注日，设立目的是为了提高人们对自闭症的认",
          createTime: 1555267535,
          hot: 11,
          id: 352,
          imageUrl: "http://alioss.yystv.cn/cover/0f22dc2a39ba5194e2e96ad23c50e3df.jpg",
          includeGames: "我的世界、星之轨迹：对他说、Easy-TalkingDevice、island、舟游、蜡烛人、AutOfTheBox、Island、守望先锋",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "一场关于自闭症的48小时游戏开发挑战",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4871"
        }]
      }],
      tableData2: [{
        webName: '游戏时光',
        articleList: [{
          author: "kong",
          contentBreviary: "在历史策略游戏《欧陆风云》里面，有一个所有玩家都会早晚尝试的挑战：复兴拜占庭。这个挑战是这样的：交战的一方是正在崛起的奥斯曼土耳其帝国，他们占地广阔，有几万精兵摩拳擦掌，在未来的数百年里都将是游戏里（",
          createTime: 1555267528,
          hot: 30,
          id: 313,
          imageUrl: "http://alioss.yystv.cn/cover/db99f5a6e984fddb53416f175bd3e824.jpg",
          includeGames: "群星、刺客信条：启示录、拜占庭：背叛、维多利亚、王国风云、王国风云2、欧陆风云",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "P社玩家的浪漫之一，是帮一个死了五百年的国家复兴",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4913"
        },{
          author: "嘤肉卫星",
          contentBreviary: "不能撸狗的游戏就不是好游戏！“都2019年了，为什么我们还是不能在游戏中愉快地撸狗？”爱狗人士在游戏中发出了最深切的呐喊。为了反映和解决这个非常严重的问题，上个月在Twitter出现了一个名为“你能撸",
          createTime: 1555267528,
          hot: 9,
          id: 312,
          imageUrl: "http://alioss.yystv.cn/cover/409209a68c76d533e80aef6009d67f25.jpg",
          includeGames: "刺客信条：黑旗、挺进地牢、猎鹰时代、只狼",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "因为一则推文，他们在游戏里加入了撸狗元素",
          type: "经典",
          url: "http://www.yystv.cn/p/4915"
        },{
          author: "社长的实习生",
          contentBreviary: "今天值得关注的短讯有：《如龙极2》上架Steam《八方旅人》将于6月7日登陆Steam现实中的“平克顿侦探社”与R星和解恐怖生存游戏《切尔诺贝利》宣传片《哥斯拉2：怪兽之王》最新中文预告尼泊尔颁布“吃",
          createTime: 1555267528,
          hot: 7,
          id: 311,
          imageUrl: "http://alioss.yystv.cn/cover/28abf64fc05d2dca8b6938fd074b2e61.jpg",
          includeGames: "绝地求生、荒野大镖客：救赎、荒野大镖客：救赎2、全境封锁2、孤岛惊魂：新黎明、如龙极2、切尔诺贝利、八方旅人、哥斯拉2：怪兽之王",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "【油盐晚报0412】Xbox开启春季特惠，《八方旅人》将登PC？",
          type: "经典",
          url: "http://www.yystv.cn/p/4916"
        },{
          author: "楼潇添",
          contentBreviary: "“木卫二，它是太阳系除了地球之外，最有可能孕育生命的星球。”于海鹏说。《无限法则》登陆Steam大半年后，一条玩家好评让于海鹏惆怅了有十多分钟。一名玩了353个小时的海外玩家，给《无限法则》打了8.5",
          createTime: 1555267530,
          hot: 19,
          id: 321,
          imageUrl: "http://alioss.yystv.cn/cover/c5f58a889002e8823bb95c7b97d49ed7.jpg",
          includeGames: "欧罗巴报告、全境封锁、无限法则、魔兽世界、细胞分裂2：明日潘多拉、极乐空间、军团要塞、绝地求生、雷神之锤、流浪地球、世界末日、天涯明月刀、只狼、守望先锋、生化危机",
          releaseTime: 1555008330,
          source: "游研社",
          sourceId: 1,
          title: "腾讯的“木卫二”",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4905"
        },{
          author: "栓子",
          contentBreviary: "当游戏和现实生活的界限逐渐模糊，两个世界发生的事也很难再脱离干系。最近，在EVE（星战前夜）的玩家圈子里发生了一件不大不小的事：一个名为Brian&nbsp;Schoeneman的人被官方封禁了账号，",
          createTime: 1555267530,
          hot: 10,
          id: 320,
          imageUrl: "http://alioss.yystv.cn/cover/ada548516d5319a1e19fa941114dffe6.jpg",
          includeGames: "",
          releaseTime: 1555008330,
          source: "游研社",
          sourceId: 1,
          title: "一名现实中的政治家，在《星战前夜》里结束了自己的政治生涯",
          type: "经典",
          url: "http://www.yystv.cn/p/4906"
        },{
          author: "朱昱睿",
          contentBreviary: "编者按：去年9月开学季，我们曾发布过一篇文章，给有志于进入游戏行业的大学生朋友推荐了一个去国外免费游学的机会。文章发布后，有数百名大学生参与了该活动的报名、笔试与面试。最终，19名大学生抓住了这次机会",
          createTime: 1555267535,
          hot: 8,
          id: 351,
          imageUrl: "http://alioss.yystv.cn/cover/400d453df381f24d98b772cf7a732e0e.png",
          includeGames: "",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "朱昱睿的游学笔记：创意已经在我们脑海里生根",
          type: "经典",
          url: "http://www.yystv.cn/p/4874"
        },{
          author: "社长的实习生",
          contentBreviary: "今天的新闻有：Atlus：会努力同步推出中文游戏《我的世界》总销量突破1.5亿《王国之心3》公开中文版前作剧情回顾《天国：拯救》Steam永降Epic：独占与否取决于开发商和发行商《圣歌》赶工事件持续",
          createTime: 1555267535,
          hot: 2,
          id: 350,
          imageUrl: "http://alioss.yystv.cn/cover/a0c06be4f0bc4b60215e7f920dbf879b.jpg",
          includeGames: "我的世界、圣歌、地铁：离去、无主之地3、天国：拯救、王国之心3、TooOldToDieYoung",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "【油盐晚报0404】《圣歌》赶工事件发酵，BioWare要求员工不与媒体交谈",
          type: "经典",
          url: "http://www.yystv.cn/p/4875"
        },{
          author: "薯片君",
          contentBreviary: "彩虹万千，魔力无限！每年4月1日愚人节是广大游戏厂商们竭尽所能肆意恶搞的好日子，他们天马行空的恶搞总能让玩家们会心一笑。比如今年育碧就在愚人节公开了一项名为“魔法彩虹”（RainbowIsMagic）",
          createTime: 1555267535,
          hot: 7,
          id: 349,
          imageUrl: "http://alioss.yystv.cn/cover/3fec73ac4f66e715dc303fd610456e94.jpg",
          includeGames: "彩虹六号：围攻、彩虹小马",
          releaseTime: 1554307200,
          source: "游研社",
          sourceId: 1,
          title: "不是愚人节玩笑！《彩虹六号：围攻》与《彩虹小马》展开联动活动",
          type: "经典",
          url: "http://www.yystv.cn/p/4876"
        },{
          author: "青春喜相逢",
          contentBreviary: "速通作弊花样百出，现有记录认证系统跟不上了。前段时间，游戏速通圈子里爆出了一件不大不小的丑闻：著名硬核技巧游戏《掘地求生》（正式名称《和班尼特福迪一起攻克难关》）的速通世界纪录是伪造的。这个世界纪录由",
          createTime: 1555267537,
          hot: 26,
          id: 361,
          imageUrl: "http://alioss.yystv.cn/cover/f759d648e98027f16cfb2b54fe695d05.jpg",
          includeGames: "和班尼特福迪一起攻克难关、黄金眼、超级食肉男孩、超级肉食男孩、游戏王、掘地求生、Dragster",
          releaseTime: 1554220800,
          source: "游研社",
          sourceId: 1,
          title: " “缸男”最速通关者自认作弊，爆出速通的尴尬现状",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4863"
        },{
          author: "嘤肉卫星",
          contentBreviary: "不仅因80岁的高龄吸引了人们的关注，她温馨舒缓的直播风格得到了更多观众的热爱。在近日结束的PAXEast2019发布会上，B社带来了一条和《上古卷轴6》有关的信息。不是激动人心的游戏发售日，也不是喜闻",
          createTime: 1555267537,
          hot: 19,
          id: 360,
          imageUrl: "http://alioss.yystv.cn/cover/32682a62c059097f1e1d63d24a139793.png",
          includeGames: "纪念上古卷轴诞生25年、上古卷轴、上古卷轴6",
          releaseTime: 1554220800,
          source: "游研社",
          sourceId: 1,
          title: "那位80岁还在玩《上古卷轴5》的老奶奶，真的变成了游戏中的NPC",
          type: "经典",
          url: "http://www.yystv.cn/p/4864"
        }]
      }],
      tableData3: [{
        webName: '游戏时光',
        articleList: [{
          author: "kong",
          contentBreviary: "在历史策略游戏《欧陆风云》里面，有一个所有玩家都会早晚尝试的挑战：复兴拜占庭。这个挑战是这样的：交战的一方是正在崛起的奥斯曼土耳其帝国，他们占地广阔，有几万精兵摩拳擦掌，在未来的数百年里都将是游戏里（",
          createTime: 1555267528,
          hot: 30,
          id: 313,
          imageUrl: "http://alioss.yystv.cn/cover/db99f5a6e984fddb53416f175bd3e824.jpg",
          includeGames: "群星、刺客信条：启示录、拜占庭：背叛、维多利亚、王国风云、王国风云2、欧陆风云",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "P社玩家的浪漫之一，是帮一个死了五百年的国家复兴",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4913"
        },{
          author: "嘤肉卫星",
          contentBreviary: "不能撸狗的游戏就不是好游戏！“都2019年了，为什么我们还是不能在游戏中愉快地撸狗？”爱狗人士在游戏中发出了最深切的呐喊。为了反映和解决这个非常严重的问题，上个月在Twitter出现了一个名为“你能撸",
          createTime: 1555267528,
          hot: 9,
          id: 312,
          imageUrl: "http://alioss.yystv.cn/cover/409209a68c76d533e80aef6009d67f25.jpg",
          includeGames: "刺客信条：黑旗、挺进地牢、猎鹰时代、只狼",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "因为一则推文，他们在游戏里加入了撸狗元素",
          type: "经典",
          url: "http://www.yystv.cn/p/4915"
        },{
          author: "社长的实习生",
          contentBreviary: "今天值得关注的短讯有：《如龙极2》上架Steam《八方旅人》将于6月7日登陆Steam现实中的“平克顿侦探社”与R星和解恐怖生存游戏《切尔诺贝利》宣传片《哥斯拉2：怪兽之王》最新中文预告尼泊尔颁布“吃",
          createTime: 1555267528,
          hot: 7,
          id: 311,
          imageUrl: "http://alioss.yystv.cn/cover/28abf64fc05d2dca8b6938fd074b2e61.jpg",
          includeGames: "绝地求生、荒野大镖客：救赎、荒野大镖客：救赎2、全境封锁2、孤岛惊魂：新黎明、如龙极2、切尔诺贝利、八方旅人、哥斯拉2：怪兽之王",
          releaseTime: 1555094728,
          source: "游研社",
          sourceId: 1,
          title: "【油盐晚报0412】Xbox开启春季特惠，《八方旅人》将登PC？",
          type: "经典",
          url: "http://www.yystv.cn/p/4916"
        },{
          author: "楼潇添",
          contentBreviary: "“木卫二，它是太阳系除了地球之外，最有可能孕育生命的星球。”于海鹏说。《无限法则》登陆Steam大半年后，一条玩家好评让于海鹏惆怅了有十多分钟。一名玩了353个小时的海外玩家，给《无限法则》打了8.5",
          createTime: 1555267530,
          hot: 19,
          id: 321,
          imageUrl: "http://alioss.yystv.cn/cover/c5f58a889002e8823bb95c7b97d49ed7.jpg",
          includeGames: "欧罗巴报告、全境封锁、无限法则、魔兽世界、细胞分裂2：明日潘多拉、极乐空间、军团要塞、绝地求生、雷神之锤、流浪地球、世界末日、天涯明月刀、只狼、守望先锋、生化危机",
          releaseTime: 1555008330,
          source: "游研社",
          sourceId: 1,
          title: "腾讯的“木卫二”",
          type: "趣闻",
          url: "http://www.yystv.cn/p/4905"
        },{
          author: "栓子",
          contentBreviary: "当游戏和现实生活的界限逐渐模糊，两个世界发生的事也很难再脱离干系。最近，在EVE（星战前夜）的玩家圈子里发生了一件不大不小的事：一个名为Brian&nbsp;Schoeneman的人被官方封禁了账号，",
          createTime: 1555267530,
          hot: 10,
          id: 320,
          imageUrl: "http://alioss.yystv.cn/cover/ada548516d5319a1e19fa941114dffe6.jpg",
          includeGames: "",
          releaseTime: 1555008330,
          source: "游研社",
          sourceId: 1,
          title: "一名现实中的政治家，在《星战前夜》里结束了自己的政治生涯",
          type: "经典",
          url: "http://www.yystv.cn/p/4906"
        }]
      }]
    }
  },
  methods: {
    loadData: function () {
      this.loading = true
      this.axios.post('api/statistic/currentHotRank').then(res => {
        this.loading = false
        if(res.data.code == '200') {
          this.tableData = res.data.data;
        }
      })
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>
.overview{
  padding: 30px 33px;
  background: #edf4f7;
}
.viewTitle{
  text-align: left;
  font-size: 16px;
  color: #666;
}
.overviewList{
  width: calc((100% - 20px) / 2);
  margin-right: 20px;
  margin-bottom: 30px;
  float: left;
  background: #fff;
  border-radius: 5px;
}
.overviewList:nth-child(2n) {
  margin-right: 0;
}
.overviewList strong{
  display: block;
  height: 60px;
  border-bottom: solid 1px #e6eef8;
  color: #4191f7;
  font-size: 16px;
  text-align: left;
  padding: 21px 0  0 27px;
  line-height: 18px;
}
.overviewList strong span{
  height: 18px;
  display: inline-block;
  border-left: solid 5px #5694f1;
  padding-left: 14px;
}

.overviewList ul{
  list-style: none;
  font-size: 14px;
  text-align: left;
  padding: 0 15px;
  /* height: 202px; */
  border-radius: 5px;
  min-height: 775px;
}
.overviewList li{
  border-bottom: solid 1px #f7f7f7;
  padding: 22px 12px;
  line-height: 45px;
  overflow: hidden;
}
.overviewList li a{
  color: #333;
}
.overviewList li span{
  padding-left: 5px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}
.img-box{
  width: 167px;
  height: 110px;
  overflow: hidden;
  margin-right: 15px;
  display: inline-block;
  vertical-align: middle;
}
.img-box img{
  width: 100%;
}
.overview-list-content{
  width: calc(100% - 190px);
  display: inline-block;
  vertical-align: middle;
}
.overview-list-content h2{
  font-size: 16px;
  color: #333;
  line-height: 22px;
  margin-bottom: 10px;
}
.overview-list-content .desc{
  line-height: 1;
}
.overview-list-content .pv{
  font-size: 14px;
  color: #999;
  display: inline-block;
  vertical-align: middle;
}
.overview-list-content .tag{
  font-size: 14px;
  color: #f13f40;
  display: inline-block;
  vertical-align: middle;
  border: solid 1px #f13f40;
  border-radius: 3px;
  line-height: 18px;
  padding: 0 2px;
  margin-left: 10px;
}


.center{
  text-align: center;
}
</style>

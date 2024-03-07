let legendLabel = [
    {
        label: "环线",
        type: 'polyline',
        color: '#F2A900',
        weight: 4
    },
    {
        label: "1号线",
        type: 'polyline',
        color: '#E4002B',
        weight: 4
    },
    {
        label: "2号线",
        type: 'polyline',
        color: '#007033',
        weight: 4
    },
    {
        label: "3号线\n空港线",
        type: 'polyline',
        color: '#003DA5',
        weight: 4
    },
    {
        label: "4号线",
        type: 'polyline',
        color: '#DC8633',
        weight: 4
    },
    {
        label: "5号线",
        type: 'polyline',
        color: '#00A3E0',
        weight: 4
    },
    {
        label: "6号线\n国博线",
        type: 'polyline',
        color: '#F67599',
        weight: 4
    },
    {
        label: "9号线",
        type: 'polyline',
        color: '#861F41',
        weight: 4
    },
    {
        label: "10号线",
        type: 'polyline',
        color: '#5F259F',
        weight: 4
    },
    {
        label: "18号线",
        type: 'polyline',
        color: '#0CD2C9',
        weight: 4
    },
    {
        label: "江跳线",
        type: 'polyline',
        color: '#0077C8',
        weight: 4
    },
    {
        label: "特色站点",
        type: 'image',
        url: "css/images/stationIcon/liziba.png"
    }
];
let defaultInfo = '<div class="defaultInfo"><div>重庆轨道交通（Chongqing Rail Transit ，CRT）是服务于中国重庆主城都市区境内的城市轨道交通系统。其第一条线路于2005年6月18日开通试运营，成为中国内地第九座、西部地区第一座开通城市轨道交通的城市。</div><img src="css/images/shouye.jpg" alt="重庆轨道交通"><div>截至2023年12月，重庆轨道交通已开通12条线路，运营里程538km（含璧山云巴）。其中，环线、1、4、5、6、9、10、18号线、国博线为地铁系统，2、3号线为单轨系统（跨座式单轨），江跳线为市域（郊）铁路。</div><div>截至2023年12月，重庆轨道交通在建线路共12条。</div><div>2023年12月31日跨年夜延时运营，重庆轨道交通全线网客运量达508.1万人次，创下历史最高客运量。</div></div>'
let annualEvent = {
    "2005": [
        "2005年6月18日，重庆轨道交通2号线“较场口～动物园”段开通试运营，是重庆市的第一条轨道交通线路也是第一条单轨线路。"
    ],
    "2006": [
        "2006年7月1日，重庆轨道交通2号线“大堰村～新山村”段开通试运营。"
    ],
    "2007": [],
    "2008": [],
    "2009": [],
    "2010": [],
    "2011": [
        "2011年7月28日，重庆首条地铁——轨道交通1号线“小什字～沙坪坝”段开通试运营，是重庆市的第一条地铁线路。",
        "2011年9月29日，重庆轨道交通3号线“两路口～鸳鸯”段开通试运营。",
        "2011年11月8日，3号线向北延伸至长福路段。",
        "2011年12月30日，3号线“二塘～江北机场”段开通试运营。"
    ],
    "2012": [
        "2012年9月28日，重庆轨道交通6号线“五里店～康庄”段开通试运营。",
        "2012年12月20日，重庆轨道交通1号线“沙坪坝～大学城”段开通试运营，标志着重庆轨道交通线路运营历程突破100公里。",
        "2012年12月26日，重庆轨道交通6号线“康庄～礼嘉”段开通试运营。",
        "2012年12月28日，重庆轨道交通3号线“二塘～鱼洞”段开通试运营。"
    ],
    "2013": [
        "2013年5月15日，重庆轨道交通6号线支线一期工程开通试运营。",
        "2013年12月31日，重庆轨道交通6号线“礼嘉～北碚”段正式开通试运营。"
    ],
    "2014": [
        "2014年12月30日，重庆轨道交通6号线“五里店～茶园”段，2号线“新山村～鱼洞”段及1号线“大学城～尖顶坡”段开通试运营，至此，重庆轨道交通运营里程达到202公里。"
    ],
    "2015": [],
    "2016": [
        "2016年12月28日，重庆轨道交通3号线北延伸段“碧津～举人坝”开通试运营。"
    ],
    "2017": [
        "2017年12月28日，重庆轨道交通5号线一期北段“园博中心～大龙山”段及10号线一期“鲤鱼池～王家庄”段开通试运营。"
    ],
    "2018": [
        "2018年11月19日，重庆轨道交通6号线与国博线拆分运营",
        "2018年12月24日，重庆轨道交通5号线一期北段南延段“大龙山~大石坝”开通运营",
        "2018年12月28日，重庆轨道交通环线东北半环与4号线一期开通试运营。"
    ],
    "2019": [
        "2019年1月11日，重庆轨道交通4号线一期延伸“民安大道~重庆北站北广场站”开通运营",
        "2019年12月30日，重庆轨道交通环线西南半环（海峡路～鹅公岩大桥～二郎段）、1号线尖璧段开通试运营，至此，重庆轨道交通运营里程达到329公里。"
    ],
    "2020": [
        "9月18日，环线、4号线互联互通直快列车上线载客试运营，重庆轨道交通在全国率先实现“互联互通”。",
        "12月31日，1号线朝天门-小什字与国博线悦来-沙河坝开通初期运营。"
    ],
    "2021": [
        "1月20日，环线剩余段（二郎-重庆西-重庆图书馆）、5号线一期工程南段（石桥铺-跳磴）开通初期运营。",
        "4月30日，重庆轨道交通线网客运量达416.9万人次，再次突破单日客运量新纪录。",
        "12月28日，重庆轨道交通地铁环线、4号线、5号线实现三线互联互通，无需换乘的直快车从唐家沱行驶至跳磴仅需59分钟。"
    ],
    "2022": [
        "2022年1月25日，重庆轨道交通9号线一期“新桥~兴科大道”开通试运营",
        "2022年6月18日，重庆轨道交通4号线二期“唐家沱~黄岭”开通试运营",
        "2022年8月6日，市郊铁路江跳线“跳磴~圣泉寺”开通试运营"
    ],
    "2023": [
        "2023年1月18日，重庆轨道交通9号线二期“兴科大道~花石沟”及10号线二期北段“鲤鱼池~后堡”开通试运营",
        "2023年2月27日，重庆轨道交通5号线北延段“园博中心~悦港北路”开通试运营",
        "2023年11月31日，重庆轨道交通5号线一期中段“大石坝~石桥铺”及10号线二期南段“后堡~兰花路”开通试运营；开通市郊铁路江跳线与5号线贯通运营列车",
        "2023年12月28日，重庆轨道交通18号线一期“跳蹬南~富华路”开通运行，标志着重庆市轨道交通线路正式突破500公里"
    ]
};
let lineInfo = {
    "环线": [
        "重庆轨道交通环线全长50.88千米，途经沙坪坝区、江北区、渝北区、南岸区、九龙坡区，经过沙坪坝、重庆大学、冉家坝、重庆北站南广场、五里店、弹子石、四公里等重要商圈或聚居区。共设车站33座，其中地下站28座、半地下站2座、高架站3座，使用6节编组As型地铁列车，列车最高设计时速每小时100公里。",
        "东北半环(重庆图书馆至重庆北站南广场至海峡路)于2018年12月28日14时开通初期运营；西南半环(海峡路至谢家湾至二郎)于2019年12月30日14时开通初期运营；剩余段(二郎至重庆西至重庆图书馆)于2021年1月20日开通初期运营。"
    ],
    "1号线": [
        "重庆轨道交通1号线全长45.34千米，是重庆市建成通车的首条地铁线路，线路呈东西走向，东起朝天门站，途经渝中区、九龙坡区、沙坪坝区、璧山区，西至璧山站，共设车站25座，其中地下站16座、高架站9座，使用6节编组B型地铁列车，列车最高设计时速每小时100公里。",
        "小什字至沙坪坝段于2011年7月28日开通初期运营；沙坪坝至大学城段于2012年12月20日开通初期运营；大学城至尖顶坡段于2014年12月30日开通初期运营；尖顶坡至璧山段于2019年12月30日开通初期运营；小什字至朝天门段于2020年12月31日开通初期运营。"
    ],
    "2号线": [
        "轨道交通2号线全长31.36公里，是我国第一条建成通车的跨座式单轨线路，起于渝中区较场口站，止于巴南区鱼洞站，线路跨越渝中区、九龙坡区、大渡口区及巴南区，连通解放碑、人民大礼堂、李子坝等著名旅游景点。全线设25座车站，其中地下站3座、高架站22座，使用跨座式单轨列车，列车最高设计时速每小时80公里。",
        "较场口至动物园段于2004年11月6日开通观光运行；较场口至动物园段于2005年6月18日开通初期运营；动物园至新山村段于2006年7月1日开通初期运营；新山村至鱼洞段于2014年12月30日开通初期运营。"
    ],
    "3号线": [
        "重庆轨道交通3号线全长67.09千米，是世界上最长的跨座式单轨交通线路，线路呈南北走向，北至渝北区江北机场和举人坝，南至巴南区鱼洞，是重庆城市轨道交通线网中南北的交通骨干线。共设车站45座，其中高架站34座、地下站11座，使用跨座式单轨列车，列车最高设计时速每小时80公里。",
        "两路口至鸳鸯段于2011年9月29日开通初期运营；鸳鸯至长福路段于2011年10月8日开通初期运营；重庆交通大学至江北机场T2航站楼段于2011年12月30日开通初期运营；鱼洞至重庆交通大学段于2012年12月28日开通初期运营；"
    ],
    "3号线空港支线": [
        "3号线空港支线碧津至举人坝段可与3号线贯通运营，共同组成世界上最长的跨座式单轨交通线路，于2016年12月28日开通初期运营。"
    ],
    "4号线": [
        "重庆轨道交通4号线一期全长15.64千米，西起民安大道站、东至唐家沱站，途经渝北区、江北区，串联起新牌坊区、重庆北站、两路寸滩保税港区等重要区域，设车站9座；4号线二期线路全长约32.8公里，设15座车站（高架站5座，地下站10座）串联起两江新区鱼复和龙兴两大片区。使用6节编组As型地铁列车，列车最高设计时速每小时100公里。",
        "重庆北站北广场至唐家沱段于2018年12月28日开通初期运营；民安大道至重庆北站北广场段于2019年1月11日开通初期运营；铁山坪至黄岭段于2022年6月18日开通初期运营。"
    ],
    "5号线": [
        "重庆轨道交通5号线全长48.66千米。一期北段途经渝北区、江北区；一期南段途经九龙坡区、沙坪坝区、大渡口区；北延伸段位于渝北区。目前开通车站28座，其中地下站24座、高架站4座，使用6节编组As型地铁列车，列车最高设计时速每小时100公里。",
        "园博中心至大龙山段于2017年12月28日、大龙山至大石坝段于2018年12月24日、石桥铺至跳磴段于2021年1月20日、悦港北路至园博中心段于2023年2月27日分别开通试运营，大石坝至石桥铺段于2023年11月30日开通运营。"
    ],
    "6号线": [
        "重庆轨道交通6号线全长63.33千米，线路呈东南至西北走问，起于茶园站，途经南岸区、渝中区、江北区、渝北区、北碚区，止于北碚站，共设车站28座，其中地下站22座、高架站6座，使用6节编组B型地铁列车，列车最高设计时速每小时100公里。",
        "五里店至康庄段于2012年9月28日开通初期运营；康庄至礼嘉段于2012年12月26日开通初期运营；礼嘉至北碚段于2013年12月31日开通初期运营；五里店至茶园段于2014年12月30日开通初期运营。"
    ],
    "国博支线": [
        "重庆轨道交通国博线全长26.58千米，起于礼嘉站，止于沙河坝站，共设车站12座，其中地下站10座、高架站2座，使用6节编组B型地铁列车，列车最高设计时速每小时100公里。",
        "礼嘉至悦来段于2013年5月15日开通初期运营，全长13千米，止于悦来站。王家庄至沙河坝段于2020年12月31日开通初期运营。"
    ],
    "9号线": [
        "重庆轨道交通9号线全长39.81公里，呈西南至东北走向。一期起于新桥站，终点至兴科大道站，共设车站26座，其中地下站24座、高架站2座；二期起于春华大道站，终点花石沟站，线路全长7.81公里，共设5座车站，其中地下站3座、高架站2座。使用6节编组As型地铁列车，列车最高设计时速每小时100公里。",
        "高滩岩至兴科大道段于2022年1月25日开通初期运营。兴科大道至花石沟段于2023年1月18日开通初期运营。"
    ],
    "10号线": [
        "重庆轨道交通10号线一期全长34.3千米。线路呈南北走向，一期南起鲤鱼池，途经江北区、渝北区，北至王家庄站，线路连接了江北区、渝北区、两江新区，连通了2座火车站和2座机场航站楼，共设车站19座，其中地下站18座、高架站1座；二期鲤鱼池至后堡段，全长6公里，共设车站4座，其中地下站3座、桥上车站1座，使用6节编组As型地铁列车，列车最高设计时速每小时100公里。",
        "王家庄至鲤鱼池段于2017年12月28日开通初期运营。鲤鱼池至后堡段于2023年1月18日开通初期运营。"
    ],
    "18号线": [
        "18号线全长28.96千米，是一条南北向轨道交通干线，线路起于渝中区富华路站，止于大渡口区跳磴南站，串连渝中区、九龙坡区、巴南区和大渡口区，全线共设车站19座（地下站12座，高架站7座），其中换乘站9座，设金鳌寺车辆段和富华路停车场各1座，新建电厂主变1座，利用既有2号线白居寺主变1座。使用6节编组As型地铁列车，列车最高设计时速每小时100公里。",
        "富华路至跳磴南段于2023年12月28日开通初期运营。"
    ],
    "江跳线": [
        "江跳线全长约28.22公里，是重庆首条开通运营的市郊铁路，起于重庆轨道交通5号线跳磴站，止于江津区圣泉寺站，途经江津区、九龙坡区、大渡口区、高新区，全线设6座车站。在跳磴站，江跳线和轨道交通5号线可实现不出站同台换乘。运营列车采用1500V直流与25KV交流双制式的车辆，是国内首条将双流制车辆应用于实际的轨道交通线路，，列车最高设计时速120公里每小时。",
        "跳磴至圣泉寺段于2022年8月6日开通初期运营。"
    ]
};
let lineImageUrl = {
    "环线": "css/images/line/huanxian.png",
    "1号线": "css/images/line/1haoxian.png",
    "2号线": "css/images/line/2haoxian.png",
    "3号线": "css/images/line/3haoxian.png",
    "3号线空港支线": "css/images/line/3haoxian.png",
    "4号线": "css/images/line/4haoxian.png",
    "5号线": "css/images/line/5haoxian.png",
    "6号线": "css/images/line/6haoxian.png",
    "国博支线": "css/images/line/guoboxian.png",
    "9号线": "css/images/line/9haoxian.png",
    "10号线": "css/images/line/10haoxian.png",
    "18号线": "css/images/line/18haoxian.jpg",
    "江跳线": "css/images/line/jiangtiaoxian.png"
}
let lineColor = {
    "环线": "#F2A900",
    "1号线": "#E4002B",
    "2号线": "#007033",
    "3号线": "#003DA5",
    "3号线空港支线": "#003DA5",
    "4号线": "#DC8633",
    "5号线": "#00A3E0",
    "6号线": "#F67599",
    "国博支线": "#F67599",
    "9号线": "#861F41",
    "10号线": "#5F259F",
    "18号线": "#0CD2C9",
    "江跳线": "#0077C8"
}
let stationInfo = {
    "碧津": "碧津站位于重庆市渝北区，重庆轨道交通3号线车站，车站编号3/38，为3号线主线与空港支线的换乘站。在碧津站，两条轨道在几秒钟内就能完成自动变轨，实现无缝切换。列车还可以通过岔道，引导行驶到另一条轨道线上，轻松完成掉头。",
    "江北机场T3航站楼": "江北机场T3航站楼站位于重庆市渝北区，是重庆轨道交通10号线和建设中的重庆轨道交通15号线的一个换乘站，有10号线快速列车服务。\n可与江北机场、国铁江北机场站进行换乘",
    "重庆北站北广场": "重庆北站北广场站位于重庆市渝北区天宫殿街道国铁重庆北站综合交通枢纽，是重庆轨道交通4号线和10号线的换乘站，车站编号4/02、10/13。本站也是重庆轨道交通目前唯一一个直快车和10号线快速列车的换乘站。",
    "欢乐谷": "欢乐谷站，原名平场站，位于重庆市渝北区礼嘉街道嘉康路，是重庆轨道交通国博线和15号线（规划中）的换乘站，车站编号6/29。\n重庆欢乐谷，位于重庆市渝北区金渝大道29号，于2014年落户重庆，2017年7月8日建成开园。作为全新打造的复合型、生态型和创新型主题乐园，不仅是欢乐版图的第七站，更是全国第一座山地版欢乐谷。",
    "临江门": "临江门站位于重庆市渝中区，重庆轨道交通2号线车站，车站编号2/02。得名于重庆城门之一临江门，近解放碑中央商务区，毗邻解放碑商圈，为重庆轨道交通2号线客流最大的车站.",
    "李子坝": "重庆轨道交通2号线李子坝站是国内第一座与商住楼共建共存的单轨高架车站，于2004年3月建成，占地面积3100平方米，建筑面积6000平方米。该站位于嘉陵江南畔的李子坝正街39号商住楼6-7层，因其“空中轨道穿楼而过”成为蜚声中外的“网红车站”。",
    "磁器口": "磁器口站位于重庆市沙坪坝区童家桥街道童家桥立交，是重庆轨道交通1号线车站，车站编号1/17。\n毗邻磁器口古镇，磁器口古镇位于重庆城西14公里的嘉陵江畔，有“小重庆”之称。磁器口是沙瓷文化的发源地，以出产瓷器而得名。",
    "跳磴": "跳磴站位于重庆市大渡口区跳磴镇，为重庆轨道交通5号线与江跳线、18号线的换乘车站，车站编号分别为5/32、江跳线/01，2021年1月20日随5号线一期南段开通。\n江跳线应用搭载了两套牵引供电系统的双流制As车辆，在跳磴站可实现“人不换乘车换乘”，真正实现了城市轨道交通与市域（郊）铁路的贯通运营，这项技术不仅填补了国内空白，在国际上也处于领先水平。",
    "朝天门": "朝天门站位于重庆市渝中区新华路、信义街路口，是重庆轨道交通1号线起点站，车站编号1/01。该站于2020年12月31日开通。\n朝天门，位于长江、嘉陵江的两江交汇处，是码头文化的起源，是重庆的标志性景点，也是重庆的门面。",
    "重庆西站": "重庆西站是重庆轨道交通环线、重庆轨道交通5号线及远期重庆轨道交通12号线中的一座换乘车站，位于重庆市沙坪坝区。地铁重庆西站建筑面积共计42790平方米，为地下三层双岛式车站。"
}
let stationImageUrl = {
    "碧津": "css/images/station/bijin.jpeg",
    "江北机场T3航站楼": "css/images/station/jiangbeijichang.jpg",
    "重庆北站北广场": "css/images/station/chongqingbeizhan.jpg",
    "欢乐谷": "css/images/station/huanlegu.jpg",
    "临江门": "css/images/station/linjiangmen.jpg",
    "李子坝": "css/images/station/liziba.jpg",
    "磁器口": "css/images/station/ciqikou.jpeg",
    "跳磴": "css/images/station/tiaodeng.jpg",
    "朝天门": "css/images/station/chaotianmen.jpg",
    "重庆西站": "css/images/station/chongqingxizhan.jpg"
}

let currentGeojsonLayer;
let currentTime = 0;
let currentYear = 2005;

function getYearFromTimestamp(time) {
    // 将时间戳转换为毫秒
    let date = new Date(time);
    let year = date.getFullYear();
    return year;
}

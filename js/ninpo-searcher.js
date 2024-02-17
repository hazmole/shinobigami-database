/***********
 * Require: 
 *   "data/ninpo-list.js": var NINPO_LIST
 *   "js/mySearcher.js": class MySearcher
 *   "js/mySearcherBuilder.js": class MySearcherBuilder
 */

/***********
 * Usage
 * 
 */
var NinpoSearcherCtrl = {};
NinpoSearcherCtrl.Build = function(elemId){
  this.searcherBuilder.Build(elemId);
}
NinpoSearcherCtrl.SetPrintFunc = function(func){
  this.searcherBuilder.SetAfterSearchFunc(func);
}
NinpoSearcherCtrl.Search = function(){
  this.searcherBuilder.searchFunc();
}
NinpoSearcherCtrl.GetResult = function(){
  return this.searcher.GetResultList();
}
NinpoSearcherCtrl.GetDisplayMode = function(){
  var isListMode = document.getElementById("displayMode").checked;
  return (isListMode)? 'list': 'card';
}


//==================
// Searcher Config
NinpoSearcherCtrl.config = {
  simple: {
    type: 'simple',
    value: '',
    fields: ['name', 'skills', 'effect'],
  },
  advanced: [
    {
      id: 'categoryStr',
      title: '忍法分類',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'泛用忍法', value:'general' },
        { text: '斜齒忍軍', entries: [
            { text:'泛用忍法', value:'clan-斜齒' },
            { text:'秘傳忍法', value:'clan-斜齒-秘傳' },
            { text:'◆ 鍔鑋組', value:'clan-斜齒-鍔鑋組' },
            { text:'◆ 大槌群', value:'clan-斜齒-大槌群' },
            { text:'◆ 指矩班', value:'clan-斜齒-指矩班' },
            { text:'◆ 御釘眾', value:'clan-斜齒-御釘眾' },
            { text:'◆ 鍵盤勢', value:'clan-斜齒-鍵盤勢' },
          ]  
        },
        { text: '鞍馬神流', entries: [
            { text:'泛用忍法', value:'clan-鞍馬' },
            { text:'秘傳忍法', value:'clan-鞍馬-秘傳' },
            { text:'◆ 迴鴉', value:'clan-鞍馬-迴鴉' },
            { text:'◆ 銃劍', value:'clan-鞍馬-銃劍' },
            { text:'◆ 魔王流', value:'clan-鞍馬-魔王流' },
            { text:'◆ 蓮華王拳', value:'clan-鞍馬-蓮華王拳' },
            { text:'◆ 密藏番', value:'clan-鞍馬-密藏番' },
          ]  
        },
        { text: '離群者', entries: [
            { text:'泛用忍法', value:'clan-離群' },
            { text:'秘傳忍法', value:'clan-離群-秘傳' },
            { text:'◆ 夜顏', value:'clan-離群-夜顏' },
            { text:'◆ NO.9', value:'clan-離群-NO.9' },
            { text:'◆ 世界忍者聯合', value:'clan-離群-世界忍者聯合' },
            { text:'◆ 影繪座', value:'clan-離群-影繪座' },
            { text:'◆ 不知火', value:'clan-離群-不知火' },
            { text:'◆ 咎眼流', value:'clan-離群-咎眼流' },
            { text:'◆ 不來梅', value:'clan-離群-不來梅' },
            { text:'◆ 屍衣', value:'clan-離群-屍衣' },
            { text:'◆ 獨自流派', value:'clan-離群-獨自' },
          ]  
        },
        { text: '比良坂機關', entries: [
            { text:'泛用忍法', value:'clan-比良坂' },
            { text:'秘傳忍法', value:'clan-比良坂-秘傳' },
            { text:'◆ 常夜', value:'clan-比良坂-常夜' },
            { text:'◆ 醜女眾', value:'clan-比良坂-醜女眾' },
            { text:'◆ 公安隱密局', value:'clan-比良坂-公安隱密局' },
            { text:'◆ 麝香會綜合醫院', value:'clan-比良坂-麝香會綜合醫院' },
            { text:'◆ 外事N課', value:'clan-比良坂-外事N課' },
          ]  
        },
        { text: '私立御齋學園', entries: [
            { text:'泛用忍法', value:'clan-御齋' },
            { text:'秘傳忍法', value:'clan-御齋-秘傳' },
            { text:'◆ 特命臨時教職員派遣委員會', value:'clan-御齋-特命臨時教職員派遣委員會' },
            { text:'◆ 御齋學園學生會', value:'clan-御齋-御齋學園學生會' },
            { text:'◆ 私立多羅尾女學院', value:'clan-御齋-私立多羅尾女學院' },
            { text:'◆ 舊校舍管理委員會', value:'clan-御齋-舊校舍管理委員會' },
            { text:'◆ 麥克菲登偵探教室', value:'clan-御齋-麥克菲登偵探教室' },
          ]  
        },
        { text: '隱忍血統', entries: [
            { text:'泛用忍法', value:'clan-隱忍' },
            { text:'秘傳忍法', value:'clan-隱忍-秘傳' },
            { text:'◆ 土蜘蛛', value:'clan-隱忍-土蜘蛛' },
            { text:'◆ 血社', value:'clan-隱忍-血社' },
            { text:'◆ 凶尾', value:'clan-隱忍-凶尾' },
            { text:'◆ 長耳', value:'clan-隱忍-長耳' },
            { text:'◆ 緣魔筋', value:'clan-隱忍-緣魔筋' },
          ]  
        },
        { text:'古流忍法', value:'ancient' },
        { text:'妖魔忍法', value:'demon' },
        { text:'外道忍法', value:'cultist' },
        { text:'血盟忍法', value:'bloodbond' },
      ]
    },
    {
      id: 'typeStr',
      title: '種類',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'攻擊', entries: [
            { text:'接近戰', value:'melee-atk' },
            { text:'射擊戰', value:'range-atk' },
            { text:'集團戰', value:'group-atk' },
            { text:'妖術戰', value:'demon-atk' },
          ]  
        },
        { text:'輔助', value:'sup' },
        { text:'裝備', value:'equ' },
      ]
    },
    {
      id: 'rangeStr',
      title: '間隔',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'無', value:'-' },
        { text:'0', value:'0' },
        { text:'1', value:'1' },
        { text:'2', value:'2' },
        { text:'3', value:'3' },
        { text:'4+', value:'4+' },
      ]
    },
    {
      id: 'costStr',
      title: '花費',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'無', value:'0' },
        { text:'1', value:'1' },
        { text:'2', value:'2' },
        { text:'3', value:'3' },
        { text:'4+', value:'4+' },
      ]
    },
    {
      id: 'restrictStr',
      title: '限定條件',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'無', value:'-' },
        { text:'階級限定', entries: [
            { text:'中忍', value:'rank-chunin' },
            { text:'中忍頭', value:'rank-chunintou' },
            { text:'上忍', value:'rank-jonin' },
            { text:'上忍頭', value:'rank-jonintou' },
            { text:'頭領', value:'rank-gashira' },
          ]
        },
        { text:'退魔篇', value:'taima' },
        //{ text:'平安篇', value:'heian ' },
        //{ text:'GP篇', value:'GP' },
      ]
    }
  ],
};

var NINPO_LIST;
//==================
// Initialize
NinpoSearcherCtrl.searcher = new MySearcher();
NinpoSearcherCtrl.searcherBuilder = new MySearcherBuilder();

NinpoSearcherCtrl.init = function(){
  const self = this;

  // Set Searcher Config
  this.searcher.SetParameters(this.config);
  this.searcherBuilder.SetOptionList(this.config.advanced);

  // Set Reference
  this.searcherBuilder.SetSearcher(this.searcher);

  // Set Modified Data
  this.searcherBuilder.SetPlaceholderText("尋找忍法名或效果...");
  this.searcherBuilder.AddBarElememt(`
    <div class="SwitchBlock">
      <span class="label">啟用簡表</span>
      <label class="switch">
        <input id="displayMode" type="checkbox" onChange="NinpoSearcherCtrl.toggleDisplayMode()">
        <span class="slider"></span>
      </label>
    </div>`);
  this.toggleDisplayMode = function(){
    self.searcherBuilder.afterSearchFunc();
  }

  // Parse & Append SearchingField
  this.searcher.InitList(NINPO_LIST.map( obj => {
    obj.categoryStr = (obj.category[0]==='ancient')? "ancient": 
                      (obj.category[0]==='cultist')? "cultist":
                      obj.category.join('-');

    obj.typeStr = obj.type!=='atk'? obj.type: obj.tags.find(tag => tag.indexOf("atk"));
    if(!obj.typeStr) console.error(obj.name, obj.tags);

    obj.rangeStr = "" + (obj.range===""? "-": parseInt(obj.range)>=4? "4+": obj.range);
    obj.costStr = "" + (obj.cost===""? "-": parseInt(obj.cost)>=4? "4+": obj.cost);

    obj.restrictStr = obj.restrict.length==0? "-": (obj.restrict.join(","));

    return obj;
  }));

  // Sorting Function
  this.searcher.SetCompareFunc(function(a, b){
    const orderOfCate = [
      "general", "clan", "秘傳",
      "斜齒忍軍", "鍔鑋組", "大槌群", "指矩班", "御釘眾", "鍵盤勢",
      "鞍馬神流", "迴鴉", "銃劍", "魔王流", "蓮華王拳", "密藏番",
      "離群者", "夜顏", "NO.9", "世界忍者聯合", "影繪座", "不知火", "咎眼流", "不來梅", "屍衣", "獨自",
      "比良坂機關", "常夜", "醜女眾", "公安隱密局", "麝香會綜合醫院", "外事N課",
      "私立御齋學園", "特命臨時教職員派遣委員會", "御齋學園學生會", "私立多羅尾女學院", "舊校舍管理委員會", "麥克菲登偵探教室",
      "隱忍血統", "土蜘蛛", "血社", "凶尾", "長耳", "緣魔筋",
      "ancient", "伊賀者", "甲賀者", "裏柳生", "根來眾", "透波", "軒猿", "亂波", "突波", "雜賀眾", "黑脛巾組", "座頭眾", "缽屋眾", "八房", "黑鍬組", "川並眾", "山潛眾", "花留陀眾", "金色庵", "宿儺眾", "真言立川流", "土御門家", "伴天連", "義經流",
      "demon",
      "cultist",
      "bloodbond",
      "unique",
    ];
    const orderOfType = ["atk", "sup", "equ"];

    var result = cmpCategory(a,b);
    if(result!=0) return result;

    result = orderOfType.indexOf(a.type) - orderOfType.indexOf(b.type);
    if(result!=0) return result;

    return this.list.indexOf(a) - this.list.indexOf(b);
    
    //-----
    function cmpCategory(a,b){
      var depth = (a.category.length>b.category.length)? a.category.length: b.category.length;
      for(var i=0; i<depth; i++){
        if(a.category[i]==null) return -1;
        if(b.category[i]==null) return 1;
        var result = orderOfCate.indexOf(a.category[i]) - orderOfCate.indexOf(b.category[i]);
        if(result!=0) return result;
      }
      return 0;
    }
  });
};
NinpoSearcherCtrl.init();

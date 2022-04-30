// Include: myFilter, MyFilterOptionBuilder

var NinpoOptionBuilder = new MyFilterOptionBuilder();
NinpoOptionBuilder.filterOptionList = [
  { id:'category', title:'忍法分類', options:[] },
  { id:'type', title:'種類', options:[] },
  { id:'range', title:'間隔', options:[] },
  { id:'cost', title:'花費', options:[] },
  { id:'restrict', title:'限定條件', options:[] },
];
NinpoOptionBuilder.filterOptionList[0].options = [
  { text:'全部', value:'all', default: true },
  { text:'泛用忍法', value:'general' },
  { text: '斜齒忍軍', isNested: true, entries: [
      { text:'泛用忍法', value:'clan-斜齒忍軍-x' },
      { text:'秘傳忍法', value:'clan-斜齒忍軍-秘傳' },
      { text:'◆ 鍔鑋組', value:'clan-斜齒忍軍-鍔鑋組' },
      { text:'◆ 大槌群', value:'clan-斜齒忍軍-大槌群' },
      { text:'◆ 指矩班', value:'clan-斜齒忍軍-指矩班' },
      { text:'◆ 御釘眾', value:'clan-斜齒忍軍-御釘眾' },
    ]  
  },
  { text: '鞍馬神流', isNested: true, entries: [
      { text:'泛用忍法', value:'clan-鞍馬神流-x' },
      { text:'秘傳忍法', value:'clan-鞍馬神流-秘傳' },
      { text:'◆ 迴鴉', value:'clan-鞍馬神流-迴鴉' },
      { text:'◆ 銃劍', value:'clan-鞍馬神流-銃劍' },
      { text:'◆ 魔王流', value:'clan-鞍馬神流-魔王流' },
      { text:'◆ 蓮華王拳', value:'clan-鞍馬神流-蓮華王拳' },
      { text:'◆ 密藏番', value:'clan-鞍馬神流-密藏番' },
    ]  
  },
  { text: '離群者', isNested: true, entries: [
      { text:'泛用忍法', value:'clan-離群者-x' },
      { text:'秘傳忍法', value:'clan-離群者-秘傳' },
      { text:'◆ 夜顏', value:'clan-離群者-夜顏' },
      { text:'◆ NO.9', value:'clan-離群者-NO.9' },
      { text:'◆ 世界忍者聯合', value:'clan-離群者-世界忍者聯合' },
      { text:'◆ 影繪座', value:'clan-離群者-影繪座' },
      { text:'◆ 不知火', value:'clan-離群者-不知火' },
      { text:'◆ 咎眼流', value:'clan-離群者-咎眼流' },
      { text:'◆ 不來梅', value:'clan-離群者-不來梅' },
    ]  
  },
  { text: '比良坂機關', isNested: true, entries: [
      { text:'泛用忍法', value:'clan-比良坂機關-x' },
      { text:'秘傳忍法', value:'clan-比良坂機關-秘傳' },
      { text:'◆ 常夜', value:'clan-比良坂機關-常夜' },
      { text:'◆ 醜女眾', value:'clan-比良坂機關-醜女眾' },
      { text:'◆ 公安隱密局', value:'clan-比良坂機關-公安隱密局' },
      { text:'◆ 麝香會綜合醫院', value:'clan-比良坂機關-麝香會綜合醫院' },
      { text:'◆ 外事N課', value:'clan-比良坂機關-外事N課' },
    ]  
  },
  { text: '私立御齋學園', isNested: true, entries: [
      { text:'泛用忍法', value:'clan-私立御齋學園-x' },
      { text:'秘傳忍法', value:'clan-私立御齋學園-秘傳' },
      { text:'◆ 特命臨時教職員派遣委員會', value:'clan-私立御齋學園-特命臨時教職員派遣委員會' },
      { text:'◆ 御齋學園學生會', value:'clan-私立御齋學園-御齋學園學生會' },
      { text:'◆ 私立多羅尾女學院', value:'clan-私立御齋學園-私立多羅尾女學院' },
      { text:'◆ 舊校舍管理委員會', value:'clan-私立御齋學園-舊校舍管理委員會' },
    ]  
  },
  { text: '隱忍血統', isNested: true, entries: [
      { text:'泛用忍法', value:'clan-隱忍血統-x' },
      { text:'秘傳忍法', value:'clan-隱忍血統-秘傳' },
      { text:'◆ 土蜘蛛', value:'clan-隱忍血統-土蜘蛛' },
      { text:'◆ 血社', value:'clan-隱忍血統-血社' },
      { text:'◆ 凶尾', value:'clan-隱忍血統-凶尾' },
      { text:'◆ 長耳', value:'clan-隱忍血統-長耳' },
    ]  
  },
  { text:'古流忍法', value:'ancient' },
  { text:'妖魔忍法', value:'demon' },
];
NinpoOptionBuilder.filterOptionList[1].options = [
  { text:'全部', value:'all', default: true },
  { text: '攻擊', isNested: true, entries: [
      { text:'接近戰', value:'atk-melee' },
      { text:'射擊戰', value:'atk-range' },
      { text:'集團戰', value:'atk-group' },
    ]  
  },
  { text:'輔助', value:'sup' },
  { text:'裝備', value:'equ' },
];
NinpoOptionBuilder.filterOptionList[2].options = [
  { text:'全部', value:'all', default: true },
  { text:'無', value:'-' },
  { text:'0', value:'0' },
  { text:'1', value:'1' },
  { text:'2', value:'2' },
  { text:'3', value:'3' },
  { text:'4+', value:'4+' },
];
NinpoOptionBuilder.filterOptionList[3].options = [
  { text:'全部', value:'all', default: true },
  { text:'無', value:'-' },
  { text:'1', value:'1' },
  { text:'2', value:'2' },
  { text:'3', value:'3' },
  { text:'4+', value:'4+' },
];
NinpoOptionBuilder.filterOptionList[4].options = [
  { text:'全部', value:'all', default: true },
  { text:'無', value:'-' },
  { text:'階級限定', isNested: true, entries: [
      { text:'中忍', value:'rank-chunin' },
      { text:'中忍頭', value:'rank-chunintou' },
      { text:'上忍', value:'rank-jonin' },
      { text:'上忍頭', value:'rank-jonintou' },
      { text:'頭領', value:'rank-gashira' },
    ]
  },
  { text:'退魔篇', value:'taima' },
/*  { text:'篇章限定', isNested: true, entries: [
      { text:'退魔篇', value:'taima' },
      { text:'平安篇', value:'heian ' },
      { text:'GP篇', value:'GP' },
    ]
  },*/
];


var NinpoFilter = new MyFilter();
NinpoFilter.defaultConfig = {
  text: '',
  category: [],
  type: [],
  range: [],
  cost: [],
  skill: '',
  tag: [],
  book: [],
  restrict: [],
}
NinpoFilter.Reset();

NinpoFilter.checkEntryFunc = function(ninpo){
  var config = this.config;

  if(config.text!=''){
    var isFound = false;
    if(ninpo.name[0].indexOf(config.text)>=0) isFound = true;
    if(ninpo.skills.join("").indexOf(config.text)>=0) isFound = true;
    if(ninpo.effect.join("").indexOf(config.text)>=0) isFound = true;
    if(!isFound) return false;
  }
  if(config.category.length>0){
    var isFound = MyFilter.OR(config.category, function(_idx, category){
      var categoryStruct = category.split('-');
      var isMatchCategory = MyFilter.AND(categoryStruct, function(lv, detail){
        if(detail=='x' && ninpo.category[lv]==null) return true;
        return ninpo.category[lv]==detail;
      });
      return isMatchCategory;
    });
    if(!isFound) return false;
  }
  if(config.type.length>0){
    var isFound = MyFilter.OR(config.type, function(_idx, type){
      var typeArr = type.split('-')
      if(typeArr.length>1 && typeArr[0]=='atk'){
        return ninpo.type==typeArr[0] && ninpo.tags.indexOf(typeArr[1]+'-atk')>=0;
      }
      return ninpo.type==type;
    });
    if(!isFound) return false;
  }
  if(config.range.length>0){
    var isFound = MyFilter.OR(config.range, function(_idx, range){
      if(range==='-') return ninpo.range==='';
      if(range==='4+') return ninpo.range>=4;
      return (""+ninpo.range).indexOf(range)>=0;
    });
    if(!isFound) return false;
  }
  if(config.cost.length>0){
    var isFound = MyFilter.OR(config.cost, function(_idx, cost){
      if(cost==='-') return ninpo.cost==0;
      if(cost==='4+') return ninpo.cost>=4;
      return (""+ninpo.cost).indexOf(cost)>=0;
    });
    if(!isFound) return false;
  }
  /*if(config.skill!=''){
    var isFound = MyFilter.OR(ninpo.skills, function(_idx, skill){
      return skill.indexOf(config.skill)>=0;
    });
    if(!isFound) return false;
  }*/
  if(config.restrict.length>0){
    var isFound = MyFilter.OR(config.restrict, function(_idx, restrict){
      if(restrict=='-'){
        return ninpo.restrict.length==0;
      } 
      return ninpo.restrict.indexOf(restrict)>=0;
    });
    if(!isFound) return false;
  }

  return true;
}
NinpoFilter.cmpEntryFunc = function(a, b){
  var result = 0;

  result = cmpCategory(a,b);
  if(result!=0) return result;

  var orderOfType = ["atk", "sup", "equ"];
  result = orderOfType.indexOf(a.type) - orderOfType.indexOf(b.type);
  if(result!=0) return result;

  return this.list.indexOf(a) - this.list.indexOf(b);
  //=============
  function cmpCategory(a,b){
    var depth = (a.category.length>b.category.length)? a.category.length: b.category.length;
    var orderOfCate = ["general", "clan", "秘傳",
      "斜齒忍軍", "鍔鑋組", "大槌群", "指矩班", "御釘眾", 
      "鞍馬神流", "迴鴉", "銃劍", "魔王流", "蓮華王拳", "密藏番", 
      "離群者", "夜顏", "NO.9", "世界忍者聯合", "影繪座", "不知火", "咎眼流", "不來梅", 
      "比良坂機關", "常夜", "醜女眾", "公安隱密局", "麝香會綜合醫院", "外事N課", 
      "私立御齋學園", "特命臨時教職員派遣委員會", "御齋學園學生會", "私立多羅尾女學院", "舊校舍管理委員會", 
      "隱忍血統", "土蜘蛛", "血社", "凶尾", "長耳",
      "ancient",
      "伊賀者", "甲賀者", "裏柳生", "根來眾", "透波", "軒猿", "亂波", "突波", "雜賀眾", "黑脛巾組", "座頭眾", "缽屋眾", "八房", "黑鍬組", "川並眾", "山潛眾", "花留陀眾", "金色庵", "宿儺眾", "真言立川流", "土御門家", "伴天連",
      "demon"];

    for(var i=0; i<depth; i++){
      if(a.category[i]==null) return -1;
      if(b.category[i]==null) return 1;

      var result = orderOfCate.indexOf(a.category[i]) - orderOfCate.indexOf(b.category[i]);
      if(result!=0) return result;
    }
    return 0;
  }
}



NinpoFilter.renderSelectedCss = function(config, key){
  $(`#_filter_${key} a`).removeClass("selected");
  if(config[key].length==0){
    $(`#_filter_${key} a[data-value='all']`).addClass("selected");
  }
  else{
    for(var val of config[key]){
      $(`#_filter_${key} a[data-value='${val}']`).addClass("selected");
    }
  }
}

NinpoFilter.toggleOption = function(key, value){
  console.log(key,value);

  if(value=="all"){
    this.config[key] = [];
  }
  else{
    switch(key){
    case "category":
    case "type":
    case "range":
    case "cost":
    case "restrict":
      toggleConfigEntry(this.config, key, value);
      break;

    default:
      console.log("Not handle yet.")
      break;
    }
  }

  this.renderSelectedCss(this.config, key)
  return ;

  //=======================
  function toggleConfigEntry(config, key, value){
    var idx = config[key].indexOf(value);
    if(idx==-1) config[key].push(value);
    else        config[key].splice(idx, 1);
  }
}

NinpoFilter.toggleGroupOption = function(optArr, isFolding){
  for(var opt of optArr){
    var key = opt.type, value = opt.value;
    if(isFolding) removeConfigEntry(this.config, key, value);
    else addConfigEntry(this.config, key, value);
    this.renderSelectedCss(this.config, key)
  }
 
  //==================
  function addConfigEntry(config, key, value){
    var idx = config[key].indexOf(value);
    if(idx==-1) config[key].push(value);
  }
  function removeConfigEntry(config, key, value){
    var idx = config[key].indexOf(value);
    if(idx>-1) config[key].splice(idx, 1);
  }
}
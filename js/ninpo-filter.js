// Include: myFilter, MyFilterOptionBuilder

var NinpoOptionBuilder = new MyFilterOptionBuilder();
NinpoOptionBuilder.filterOptionList = [
  { id:'category', title:'忍法分類', options:[] },
  { id:'type', title:'種類', options:[] },
  { id:'range', title:'間隔', options:[] },
  { id:'cost', title:'花費', options:[] },
];
NinpoOptionBuilder.filterOptionList[0].options = [
  { text:'全部', value:'all', default: true },
  { text:'泛用忍法', value:'general' },
  { text: '斜齒忍軍', value: 'clan',isNested: true, entries: [
      { text:'斜齒忍軍-泛用', value:'clan-斜齒忍軍-x' },
      { text:'斜齒忍軍-秘傳', value:'clan-斜齒忍軍-秘傳' },
      { text:'斜齒忍軍-鍔鑋組', value:'clan-斜齒忍軍-鍔鑋組' },
    ]  
  },
  { text:'妖魔忍法', value:'demon' },
];
NinpoOptionBuilder.filterOptionList[1].options = [
  { text:'全部', value:'all', default: true },
  { text:'攻擊', value:'atk' },
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
  if(config.skill!=''){
    var isFound = MyFilter.OR(ninpo.skills, function(_idx, skill){
      return skill.indexOf(config.skill)>=0;
    });
    if(!isFound) return false;
  }

  return true;
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
      toggleConfigEntry(this.config, key, value);
      break;

    default:
      console.log("Not handle yet.")
      break;
    }
  }

  renderSelectedCss(this.config, key)
  return ;

  //=======================
  function toggleConfigEntry(config, key, value){
    var idx = config[key].indexOf(value);
    if(idx==-1) config[key].push(value);
    else        config[key].splice(idx, 1);
  }
  function renderSelectedCss(config, key){
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
}
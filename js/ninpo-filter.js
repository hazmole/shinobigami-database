// Include: myFilter, MyFilterOptionBuilder

var NinpoOptionBuilder = new MyFilterOptionBuilder();
NinpoOptionBuilder.filterOptionList = [
  { id:'category', title:'忍法分類', type:'simple-select', options:[] },
  { id:'type', title:'種類', type:'simple-select', options:[] },
  { id:'range', title:'間隔', type:'simple-select', options:[] },
  { id:'cost', title:'花費', type:'simple-select', options:[] },
];
NinpoOptionBuilder.filterOptionList[0].options = [
  { text:'全部', value:'all', default: true },
  { text:'泛用忍法', value:'general' },
  { text:'流派忍法', value:'clan' },
  { text:'妖魔忍法', value:'demon' },
];
NinpoOptionBuilder.filterOptionList[1].options = [
  { text:'全部', value:'all', default: true },
  { text:'攻擊', value:'atk' },
  { text:'輔助', value:'sup' },
  { text:'裝備', value:'equ' },
];


var NinpoFilter = new MyFilter();
NinpoFilter.defaultConfig = {
  text: '',
  category: [],
  type: [],
  range: '',
  cost: '',
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
      var isMatchCategory = MyFilter.AND(category, function(lv, detail){
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
  if(config.range!=''){
    var range = config.range==='-'? '': parseInt(config.range);
    if(ninpo.range!==range) return false;
  }
  if(config.cost!=''){
    var cost = config.cost==='-'? 0: parseInt(config.cost);
    if(ninpo.cost!==cost) return false;
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
      this.SetConfigEntry(key, [[value]]);
      break;
    case "type":
      this.SetConfigEntry(key, [value]);
      break;
    
    default:
      console.log("Not handle yet.")
      break;
    }
  }

  renderSelectedCss(this.config, key)
  return ;

  //=======================
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
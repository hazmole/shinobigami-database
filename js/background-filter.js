// Include: myFilter, MyFilterOptionBuilder

var BgOptionBuilder = new MyFilterOptionBuilder();
BgOptionBuilder.filterOptionList = [];


var BgFilter = new MyFilter();
BgFilter.defaultConfig = {
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
BgFilter.Reset();

BgFilter.checkEntryFunc = function(ninpo){
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




BgFilter.renderSelectedCss = function(config, key){
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

BgFilter.toggleOption = function(key, value){
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

BgFilter.toggleGroupOption = function(optArr, isFolding){
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

class NinpoSearcher{
  constructor(origin_list){
    this.list = origin_list;
    this.filteredList = null;
    this.filterConfig = {
      text: '',
      category: [],
      type: [],
      range: '',
      cost: '',
      skill: '',
      tag: [],
      book: [],
      restrict: [],
    };
  }

  //==============
  Search(){
    this.filteredList = this.list.filter( ninpo => this.Check(ninpo) );
    return this.filteredList;
  }

  Check(ninpo){
    var config = this.filterConfig;

    if(config.text!=''){
      var isFound = false;
      if(ninpo.name[0].indexOf(config.text)>=0) isFound = true;
      if(ninpo.effect.join("").indexOf(config.text)>=0) isFound = true;
      if(!isFound) return false;
    }
    if(config.category.length>0){
      var isFound = OR(config.category, function(_idx, category){
        var isMatchCategory = AND(category, function(lv, detail){
          return ninpo.category[lv]==detail;
        });
        return isMatchCategory;
      });
      if(!isFound) return false;
    }
    if(config.type.length>0){
      var isFound = OR(config.type, function(_idx, type){
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
      var isFound = OR(ninpo.skills, function(_idx, skill){
        return skill.indexOf(config.skill)>=0;
      });
      if(!isFound) return false;
    }

    return true;

    //====================
    function OR(arr, condFunc){
      var isFound = false;
      for(var i=0; i<arr.length; i++){
        if(condFunc(i, arr[i])) isFound = true;
      }
      return isFound;
    }
    function AND(arr, condFunc){
      for(var i=0; i<arr.length; i++){
        if(!condFunc(i, arr[i])) return false;
      }
      return true;
    }
  }


  ResetFilterConfig(){
    this.filterConfig = {
      name: '',
      category: [],
      type: [],
      range: '',
      cost: '',
      skill: '',
      tag: [],
      book: [],
      restrict: [],
    };
  }
  SetFilterConfig(key, value){
    this.filterConfig[key] = value;
  }

}

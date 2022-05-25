/***********
 *  Require: None
 * 
 * *********/

class MySearcher{
  constructor(){
    this.list = [];
    this.resultList = null;
    this.paramConfig = {};

    this.compareFunc = null;
  }
  //==============
  InitList(list){ this.list = list; }
  SetParameters(params){ this.paramConfig = params; }
  SetCompareFunc(func){ this.compareFunc = func; }

  SetSimpleText(text){
    this.paramConfig.simple.value = text;
  }
  AddParameter(key, item){
    var entry = this.paramConfig.advanced.find( param => param.id === key );
    if(!entry) return ;

    switch(entry.type){
      case "selection":
        var idx = entry.value.indexOf(item);
        if(idx==-1) entry.value.push(item);
        break;
    }
  }
  RemoveParameter(key, item){
    var entry = this.paramConfig.advanced.find( param => param.id === key );
    if(!entry) return ;

    switch(entry.type){
      case "selection":
        var idx = entry.value.indexOf(item);
        if(idx>-1) entry.value.splice(idx, 1);
        break;
    }
  }
  ClearParameter(key){
    var entry = this.paramConfig.advanced.find( param => param.id === key );
    if(!entry) return ;

    switch(entry.type){
      case "selection":
        entry.value = [];
        break;
    }
  }


  //==============
  Search(){
    var self = this;
    return this.resultList = this.list
      .filter( entry => check(entry) )
      .sort( (a,b) => compare(a,b) );

    //-----------
    function check(item){
      if(!self.filterFunc) return true;
      return self.filterFunc(item);
    }
    function compare(a, b){
      if(!self.compareFunc) return 0;
      return self.compareFunc(a,b);
    }
  }
  Reset(){
    this.paramConfig.simple.value = '';
    this.paramConfig.advanced.forEach( param => {
      if(param.type=="selection") param.value = [];
    });
  }
  GetResultList(){
    return this.resultList;
  }

  //==============
  filterFunc(item){
    var self = this;

    // handle simpleSearch
    var paramObj = this.paramConfig.simple;
    if(!filterSimple(item, paramObj)){
      return false;
    }

    // handle advanced
    for(var paramObj of this.paramConfig.advanced){
      var type  = paramObj.type;
      var key   = paramObj.id;
      var value = paramObj.value;

      if(value==null || value==='' || value.length===0) continue;

      var isFound = true;      
      switch(type){
        case "selection": isFound = filterSelection(item, key, paramObj); break;
      }

      if(!isFound) return false;
    }
    return true;

    //-------------
    // type "simple"
    // { value: '', fields: [...], }
    function filterSimple(item, paramObj){
      var value = paramObj.value;
      if(value==='') return true;

      var fieldArr = paramObj.fields;
      for(var field of fieldArr){
        if(item[field].join("").indexOf(value)>=0) return true;
      }
      return false;
    }

    //-------------
    // type "simple"
    // { value: [...], }
    function filterSelection(item, key, paramObj){
      var value = paramObj.value;
      if(value.length===0) return true;

      return MySearcher.OR( paramObj.value, function(idx, val){
        return item[key] == val;
      });
    }
  }

  //==============
  static OR(arr, condFunc){
    var isFound = false;
    for(var i=0; i<arr.length; i++){
      if(condFunc(i, arr[i])) isFound = true;
    }
    return isFound;
  }
  static AND(arr, condFunc){
    for(var i=0; i<arr.length; i++){
      if(!condFunc(i, arr[i])) return false;
    }
    return true;
  }
}

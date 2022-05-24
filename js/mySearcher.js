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
    this.paramList = {};
  }

  //==============
  filterFunc(item){
    for(var key of Object.keys(this.paramConfig)){
      var paramObj = this.paramConfig[key];
      var type  = paramObj.type;
      var value = paramObj.value;

      if(value==null || value==='' || value.length===0) continue;

      var isFound = true;      
      switch(type){
        case "simple": isFound = filterSimple(item, paramObj);
      }

      if(!isFound) return false;
    }
    return true;

    //-------------
    // text: { type: 'simple', value: '', fields: [...], }
    function filterSimple(item, paramObj){
      var value = paramObj.value;
      if(value==='') return true;

      var fieldArr = paramObj.fields;
      for(var field of fieldArr){
        if(item[field].join("").indexOf(value)>=0) return true;
      }
      return false;
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

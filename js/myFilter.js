class MyFilter{
  constructor(){
    this.list = [];
    this.config = {};
    this.defaultConfig = {};
    this.checkEntryFunc = null;

    this.resultList = null;
  }
  //==============
  SetList(list){ this.list = list; }
  SetConfig(config){ this.config = config; }
  SetCheckFunc(func){ this.checkEntryFunc = func; }
  SetConfigEntry(key, value){
    this.config[key] = value;
  }

  //==============
  Execute(config){
    if(config !== undefined) this.SetConfig(config);
    return this.resultList = this.list.filter( entry => this.Check(entry) );
  }
  Check(entry){
    var config = this.filterConfig;
    return this.checkEntryFunc(entry);
  }
  Reset(){
    this.config = this.defaultConfig;
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

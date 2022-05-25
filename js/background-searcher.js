/***********
 * Require: 
 *   "data/background-list.js": var BACKGROUND_LIST
 *   "js/mySearcher.js": class MySearcher
 *   "js/mySearcherBuilder.js": class MySearcherBuilder
 */

/***********
 * Usage
 * 
 */
var BgSearcherCtrl = {};
BgSearcherCtrl.Build = function(elemId){
  this.searcherBuilder.Build(elemId);
}
BgSearcherCtrl.SetPrintFunc = function(func){
  this.searcherBuilder.SetAfterSearchFunc(func);
}
BgSearcherCtrl.Search = function(){
  this.searcherBuilder.searchFunc();
}
BgSearcherCtrl.GetResult = function(){
  return this.searcher.GetResultList();
}
BgSearcherCtrl.GetDisplayMode = function(){
  var isListMode = document.getElementById("displayMode").checked;
  return (isListMode)? 'list': 'card';
}


//==================
// Searcher Config
BgSearcherCtrl.config = {
  simple: {
    type: 'simple',
    value: '',
    fields: ['name', 'effect'],
  },
  advanced: [
    {
      id: 'category',
      title: '種類',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'長所', value:'benefit' },
        { text:'弱點', value:'flaw' },
      ]
    },
    {
      id: 'costStr',
      title: '功績點',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'1', value:'1' },
        { text:'2', value:'2' },
        { text:'3', value:'3' },
        { text:'4', value:'4' },
        { text:'5', value:'5' },
        { text:'6', value:'6' },
        { text:'7+', value:'7+' },
      ]
    },
  ],
};

var BACKGROUND_LIST;
//==================
// Initialize
BgSearcherCtrl.searcher = new MySearcher();
BgSearcherCtrl.searcherBuilder = new MySearcherBuilder();

BgSearcherCtrl.init = function(){
  const self = this;

  // Set Searcher Config
  this.searcher.SetParameters(this.config);
  this.searcherBuilder.SetOptionList(this.config.advanced);

  // Set Reference
  this.searcherBuilder.SetSearcher(this.searcher);

  // Set Modified Data
  this.searcherBuilder.SetPlaceholderText("尋找背景名或效果...");
  this.searcherBuilder.AddBarElememt(`
    <div class="SwitchBlock">
      <span class="label">啟用簡表</span>
      <label class="switch">
        <input id="displayMode" type="checkbox" onChange="BgSearcherCtrl.toggleDisplayMode()">
        <span class="slider"></span>
      </label>
    </div>`);
  this.toggleDisplayMode = function(){
    self.searcherBuilder.afterSearchFunc();
  }

  // Parse & Append SearchingField
  this.searcher.InitList(BACKGROUND_LIST.map( obj => {
    obj.costStr = parseCost(obj.exp);
    return obj;

    function parseCost(costArr){
      var cost = costArr[0];
      if(cost>6) return "7+";
      return ""+cost;
    }
  }));

  // Sorting Function
  /*this.searcher.SetCompareFunc( (a,b) => {...} );*/
};
BgSearcherCtrl.init();


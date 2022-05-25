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
  BgSearcherCtrl.searcherBuilder.Build(elemId);
}
BgSearcherCtrl.SetPrintFunc = function(func){
  BgSearcherCtrl.searcherBuilder.SetAfterSearchFunc(func);
}
BgSearcherCtrl.Search = function(){
  BgSearcherCtrl.searcherBuilder.searchFunc();
}
BgSearcherCtrl.GetResult = function(){
  return BgSearcherCtrl.searcher.GetResultList();
}
BgSearcherCtrl.GetDisplayMode = function(){
  var isListMode = document.getElementById("displayMode").checked;
  return (isListMode)? 'list': 'card';
}


//==================
// Searcher Config
const BgSearcherConfig = {
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

//==================
// Initialize
BgSearcherCtrl.searcher = new MySearcher();
BgSearcherCtrl.searcher.SetParameters(BgSearcherConfig);

BgSearcherCtrl.searcherBuilder = new MySearcherBuilder();
BgSearcherCtrl.searcherBuilder.SetSearcher(BgSearcherCtrl.searcher);
BgSearcherCtrl.searcherBuilder.SetOptionList(BgSearcherConfig.advanced);
BgSearcherCtrl.searcherBuilder.SetPlaceholderText("尋找背景名或效果...");

BgSearcherCtrl.searcherBuilder.AddBarElememt(`
<div class="SwitchBlock">
  <span class="label">啟用簡表</span>
  <label class="switch">
    <input id="displayMode" type="checkbox" onChange="toggleDisplayMode()">
    <span class="slider"></span>
  </label>
</div>`);
function toggleDisplayMode(){
  BgSearcherCtrl.searcherBuilder.afterSearchFunc();
}

//==================
// Add SearchingField
var BACKGROUND_LIST;
BgSearcherCtrl.searcher.InitList(BACKGROUND_LIST.map( obj => {
  obj.costStr = parseCost(obj.exp);
  return obj;

  function parseCost(costArr){
    var cost = costArr[0];
    if(cost>6) return "7+";
    return ""+cost;
  }
}));

//==================
// Sorting Function
//  - none



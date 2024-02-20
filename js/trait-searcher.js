/***********
 * Require: 
 *   "data/background-list.js": var BACKGROUND_LIST
 *   "js/mySearcher.js": class MySearcher
 */

//==================
// Declaration
var TraitSearcherCtrl = {};
var TRAIT_LIST;

{
  var ctrl = TraitSearcherCtrl;
  var data_list = TRAIT_LIST;

  //==================
  // Controller
  ctrl.simpleCfg = { fields:['t_name','t_effect'] };
  ctrl.advancedCfg = [
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
      id: 't_cost',
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
  ];

  ctrl.decorateListData = function(itemObj) {
    itemObj.t_name = itemObj.name.join("");
    itemObj.t_effect = itemObj.effect.join("");
    itemObj.t_cost = parseCost(itemObj.exp);
    
    return itemObj;  

    function parseCost(costArr){
      var cost = costArr[0];
      if(cost>6) return "7+";
      return ""+cost;
    }
  }
  ctrl.sortFunc = (a, b) => {
    const orderOfCategory = ["benefit", "flaw"];

    result = orderOfCategory.indexOf(a.category) - orderOfCategory.indexOf(b.category);
    if(result!=0) return result;

    result = a.exp[0] - b.exp[0];
    if(result!=0) return result;

    result = a.exp.length - b.exp.length;
    return result;
  };

  //==================
  // Initialize
  ctrl.searcher = new MySearcher();
  ctrl.searcher.Register(
  (data_list).map(ctrl.decorateListData),
  {
    simple: ctrl.simpleCfg,
    advanced: ctrl.advancedCfg,
    compareFunc: ctrl.sortFunc,
    placeholderText: "尋找背景名或效果...",

    isDisplayModeEnable: true,
    displayMode: "list",
  });
}

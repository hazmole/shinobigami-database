/***********
 * Require: 
 *   "data/enemy-list.js": var ENEMY_LIST
 *   "js/mySearcher.js": class MySearcher
 */

//==================
// Declaration
var EnemySearcherCtrl = {};
var ENEMY_LIST;

{
  var ctrl = EnemySearcherCtrl;
  var data_list = ENEMY_LIST;

  //==================
  // Controller
  ctrl.simpleCfg = { fields:['t_name','t_effect'] };
  ctrl.advancedCfg = [
  ];

  ctrl.decorateListData = function(itemObj) {
    itemObj.t_name = itemObj.name.join("");

    return itemObj;
  }
  ctrl.sortFunc = (a, b) => {
    if(a.category != b.category) return 0;

    var result = a.level - b.level;
    if(result!=0) return result;

    var result = a.hp - b.hp;
    if(result!=0) return result;

    return 0;
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
    placeholderText: "尋找敵人名或忍法...",

    isDisplayModeEnable: true,
    displayMode: "list",
  });
}

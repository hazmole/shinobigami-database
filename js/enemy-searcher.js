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
    {
      id: 'category',
      title: '類別',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'常人', value:'common' },
        { text:'忍獸', value:'beast' },
        { text:'下忍', value:'ke-nin' },
        { text:'中忍', value:'chu-nin' },
        { text:'上忍', value:'jo-nin' },
        { text:'低級妖魔', value:'lesser-demon' },
        { text:'中級妖魔', value:'common-demon' },
        { text:'上級妖魔', value:'great-demon' },
      ]
    },
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

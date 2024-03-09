/***********
 * Require: 
 *   "data/ninpo-list.js": var NINPO_LIST
 *   "js/mySearcher.js": class MySearcher
 */

//==================
// Declaration
var NinpoSearcherCtrl = {};
var NINPO_LIST;

{
  var ctrl = NinpoSearcherCtrl;
  var data_list = NINPO_LIST;

  //==================
  // Controller
  ctrl.simpleCfg = { fields:['t_name','t_skills','t_effect'] };
  ctrl.advancedCfg = [
    {
      id: 't_category',
      title: '忍法分類',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'泛用忍法', value:'general' },
        { text: '斜齒忍軍', entries: [
            { text:'泛用忍法', value:'clan-斜齒' },
            { text:'秘傳忍法', value:'clan-斜齒-秘傳' },
            { text:'◆ 鍔鑋組', value:'clan-斜齒-鍔鑋組' },
            { text:'◆ 大槌群', value:'clan-斜齒-大槌群' },
            { text:'◆ 指矩班', value:'clan-斜齒-指矩班' },
            { text:'◆ 御釘眾', value:'clan-斜齒-御釘眾' },
            { text:'◆ 鍵盤勢', value:'clan-斜齒-鍵盤勢' },
          ]  
        },
        { text: '鞍馬神流', entries: [
            { text:'泛用忍法', value:'clan-鞍馬' },
            { text:'秘傳忍法', value:'clan-鞍馬-秘傳' },
            { text:'◆ 迴鴉', value:'clan-鞍馬-迴鴉' },
            { text:'◆ 銃劍', value:'clan-鞍馬-銃劍' },
            { text:'◆ 魔王流', value:'clan-鞍馬-魔王流' },
            { text:'◆ 蓮華王拳', value:'clan-鞍馬-蓮華王拳' },
            { text:'◆ 密藏番', value:'clan-鞍馬-密藏番' },
          ]  
        },
        { text: '離群者', entries: [
            { text:'泛用忍法', value:'clan-離群' },
            { text:'秘傳忍法', value:'clan-離群-秘傳' },
            { text:'◆ 夜顏', value:'clan-離群-夜顏' },
            { text:'◆ NO.9', value:'clan-離群-NO.9' },
            { text:'◆ 世界忍者聯合', value:'clan-離群-世界忍者聯合' },
            { text:'◆ 影繪座', value:'clan-離群-影繪座' },
            { text:'◆ 不知火', value:'clan-離群-不知火' },
            { text:'◆ 咎眼流', value:'clan-離群-咎眼流' },
            { text:'◆ 不來梅', value:'clan-離群-不來梅' },
            { text:'◆ 屍衣', value:'clan-離群-屍衣' },
            { text:'◆ 獨自流派', value:'clan-離群-獨自' },
          ]  
        },
        { text: '比良坂機關', entries: [
            { text:'泛用忍法', value:'clan-比良坂' },
            { text:'秘傳忍法', value:'clan-比良坂-秘傳' },
            { text:'◆ 常夜', value:'clan-比良坂-常夜' },
            { text:'◆ 醜女眾', value:'clan-比良坂-醜女眾' },
            { text:'◆ 公安隱密局', value:'clan-比良坂-公安隱密局' },
            { text:'◆ 麝香會綜合醫院', value:'clan-比良坂-麝香會綜合醫院' },
            { text:'◆ 外事N課', value:'clan-比良坂-外事N課' },
          ]  
        },
        { text: '私立御齋學園', entries: [
            { text:'泛用忍法', value:'clan-御齋' },
            { text:'秘傳忍法', value:'clan-御齋-秘傳' },
            { text:'◆ 特命臨時教職員派遣委員會', value:'clan-御齋-特命臨時教職員派遣委員會' },
            { text:'◆ 御齋學園學生會', value:'clan-御齋-御齋學園學生會' },
            { text:'◆ 私立多羅尾女學院', value:'clan-御齋-私立多羅尾女學院' },
            { text:'◆ 舊校舍管理委員會', value:'clan-御齋-舊校舍管理委員會' },
            { text:'◆ 麥克菲登偵探教室', value:'clan-御齋-麥克菲登偵探教室' },
          ]  
        },
        { text: '隱忍血統', entries: [
            { text:'泛用忍法', value:'clan-隱忍' },
            { text:'秘傳忍法', value:'clan-隱忍-秘傳' },
            { text:'◆ 土蜘蛛', value:'clan-隱忍-土蜘蛛' },
            { text:'◆ 血社', value:'clan-隱忍-血社' },
            { text:'◆ 凶尾', value:'clan-隱忍-凶尾' },
            { text:'◆ 長耳', value:'clan-隱忍-長耳' },
            { text:'◆ 緣魔筋', value:'clan-隱忍-緣魔筋' },
          ]  
        },
        { text:'古流忍法', value:'ancient' },
        { text:'妖魔忍法', value:'demon' },
        { text:'外道忍法', value:'cultist' },
        { text:'血盟忍法', value:'bloodbond' },
        { text:'敵人專用', value:'enemy' },
      ]
    },
    {
      id: 't_type',
      title: '種類',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'攻擊', entries: [
            { text:'接近戰', value:'melee-atk' },
            { text:'射擊戰', value:'range-atk' },
            { text:'集團戰', value:'group-atk' },
            { text:'妖術戰', value:'demon-atk' },
          ]  
        },
        { text:'輔助', value:'sup' },
        { text:'裝備', value:'equ' },
      ]
    },
    {
      id: 't_range',
      title: '間隔',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'無', value:'-' },
        { text:'0', value:'0' },
        { text:'1', value:'1' },
        { text:'2', value:'2' },
        { text:'3', value:'3' },
        { text:'4+', value:'4+' },
      ]
    },
    {
      id: 't_cost',
      title: '花費',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'無', value:'0' },
        { text:'1', value:'1' },
        { text:'2', value:'2' },
        { text:'3', value:'3' },
        { text:'4+', value:'4+' },
      ]
    },
    {
      id: 't_restrict',
      title: '限定條件',
      type: 'selection',
      value: [],
      options: [
        { text:'全部', value:'*', default: true },
        { text:'無', value:'-' },
        { text:'階級限定', entries: [
            { text:'中忍', value:'rank-chunin' },
            { text:'中忍頭', value:'rank-chunintou' },
            { text:'上忍', value:'rank-jonin' },
            { text:'上忍頭', value:'rank-jonintou' },
            { text:'頭領', value:'rank-gashira' },
          ]
        },
        { text:'退魔篇', value:'taima' },
        //{ text:'平安篇', value:'heian ' },
        //{ text:'GP篇', value:'GP' },
      ]
    }
  ];

  ctrl.decorateListData = function(itemObj) {
    itemObj.t_name   = itemObj.name.join("");
    itemObj.t_skills = itemObj.skills.join("");
    itemObj.t_effect = itemObj.effect.join("");

    itemObj.t_category = decoCategory(itemObj.category);
    itemObj.t_type = (itemObj.type!=="atk")? itemObj.type: (itemObj.tags.find(tag => tag.indexOf("atk")))
    if(!itemObj.t_type) console.error(itemObj.name, itemObj.tags);

    itemObj.t_range = ""+ decoRange(itemObj.range);
    itemObj.t_cost  = ""+ decoRange(itemObj.cost);
    itemObj.t_restrict = (itemObj.restrict.length==0)? ["-"]: (itemObj.restrict.map(v => v));

    return itemObj;

    function decoCategory(categoryArr) {
      switch(categoryArr[0]){
        case "ancient":
        case "cultist":
        case "enemy":
          return categoryArr[0];
        default:
          return itemObj.category.join("-")
      }
    }
    function decoRange(range) {
      if(range==="") return "-";
      return (parseInt(range)>=4)? "4+": range;
    }
    function decoCost(cost) {
      if(cost==="") return "-";
      return (parseInt(cost)>=4)? "4+": cost;
    }
  }
  ctrl.sortFunc = (a, b) => {
    var a_cateT = a.category.join("-");
    var b_cateT = b.category.join("-");
    if(a_cateT != b_cateT) return 0;

    const orderOfType = ["atk", "sup", "equ"];
    var result = orderOfType.indexOf(a.type) - orderOfType.indexOf(b.type);
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
    placeholderText: "尋找忍法名或效果...",

    isDisplayModeEnable: true,
    displayMode: "list",
  });
}


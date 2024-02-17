/***********
 *  Version: 1.2
 * *********/

class MySearcher{
  constructor(){
    this.config = {
      placeholderText: LangUtil.Searcher['placeholderDefaultText'],
      simple:   null,
      advanced: null,
    };
    this.act = {
      DoSearch: this.Search.bind(this),
      DoAfterSearch: this.DoAfterSearch.bind(this),
    };
    
    this.elemCtrl = new MySearcherElemCtrl(this.config, this.act);

    this.itemList = null;
    this.resultList = null;

    this.compareFunc = null;
    this.beforeSearchFunc = null;
    this.afterSearchFunc = null;
  }

  //=====================
  Register(itemList, config){
    this.itemList = itemList;
    if(config){
      Object.keys(config).forEach( key => {
        this.config[key] = config[key];
      });
    }
  }
  SetBeforeSearchFunc(func){ this.beforeSearchFunc = func; }
  SetAfterSearchFunc(func) { this.afterSearchFunc  = func; }
  GetDisplayMode(){ return this.config.displayMode; }
  Build(elemQuery){
    this.elemCtrl.Build(elemQuery);
  }
  Search(){
    // :: before
    if(this.beforeSearchFunc != null) this.beforeSearchFunc();

    // Fetch Arguments
    var filter = {
      simple:   this.elemCtrl.GetSimpleSearchVal(),
      advanced: {},
    };
    // Search
    this.resultList = this.itemList.filter( item => this.isItemMatched(item, filter));
    // Sort
    if(this.compareFunc!=null) this.resultList.sort(this.compareFunc);

    // :: after
    this.DoAfterSearch();
  }
  DoAfterSearch() {
    if(this.afterSearchFunc != null) this.afterSearchFunc(this.resultList);
  }

  //=====================
  isItemMatched(itemObj, filter){
    // Simple Search
    if(filter.simple){
      var text = filter.simple.toLowerCase();
      var result = this.config.simple.fields
        .map( field => itemObj[field]!=null && itemObj[field].toLowerCase().includes(text) )
        .reduce( (a,b) => a || b );

      if(!result) return false;
    }

    return true;
  }

}

class MySearcherElemCtrl {
  constructor(config, act){
    this.config = config;
    this.act = act;

    this.rootElem = null;

    // Expand action
    this.act.toggleDisplayMode = this.toggleDisplayMode.bind(this);
  }

  GetSimpleSearchVal(){
    return this.rootElem.find("#searchInput").val();
  }
  Build(elemQuery){
    var rootElem = $(elemQuery);
    if(rootElem.length <= 0) {
      console.error("cannot find element: " + elemQuery);
      return ;
    }

    const self = this;
    this.rootElem = rootElem;

    buildBasicPanel();
    buildAdditionalSearchElems();

    //======================
    function buildBasicPanel() {
      rootElem.append(`
        <div class="SearchBar">
          <button id="AdvancedSearchBtn">▼ ${LangUtil.Searcher['advanceSearch']}</button>
          <form class="SearchBox" onsubmit="event.preventDefault();" role="search">
            <input id="searchInput" type="search" placeholder="${self.config.placeholderText}" autofocus />
            <button id="SearchBtn" type="submit">${LangUtil.Searcher['search']}</button>
          </form>
          <div class="AdditionalSearchElems"></div>
        </div>
        <div id="AdvancedFilterPanel" class="AdvancedFilterBar"></div>`);
      $("#searchInput").on('search', self.act.DoSearch);
    }
    function buildAdditionalSearchElems() {
      var baseElem = rootElem.find(".AdditionalSearchElems");

      if(self.config.isDisplayModeEnable){
        buildDisplayModeSwitch(baseElem);
      }
    }
    function buildDisplayModeSwitch(baseElem) {
        baseElem.append(`
          <div class="SwitchBlock">
            <span class="label">${LangUtil.Searcher['toggleDisplayMode']}</span>
            <label class="switch">
              <input id="displayMode" type="checkbox" ${self.config.displayMode=="list"? "checked": ""}>
              <span class="slider"></span>
            </label>
          </div>`);
        $("#displayMode").on('change', self.act.toggleDisplayMode);
    }
  }


  //===================
  // Actions
  toggleDisplayMode(){
    this.config.displayMode = (this.config.displayMode=="list")? "card": "list";
    this.act.DoAfterSearch();
  }

}


var LangUtil;
if(!LangUtil) LangUtil = {};
LangUtil.Searcher = {
  search: "搜尋",
  advanceSearch: "進階搜尋",
  placeholderDefaultText: "請輸入關鍵字",
  resultDefaultText: "總共{0}筆資料",
  toggleDisplayMode: "啟用簡表",
};
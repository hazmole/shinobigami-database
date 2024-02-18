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
      advanced: this.config.advanced,
    };
    // Search
    this.resultList = this.itemList.filter( item => this.isItemMatched(item, filter));
    // Sort
    if(this.config.compareFunc!=null) this.resultList.sort(this.config.compareFunc);

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

    // Advanced Search
    if(filter.advanced.length>0){
      var result = filter.advanced
        .map( f => {
          var itemVal = itemObj[f.id];

          if(f.type == "selection"){
            if(f.value.length == 0) return true;
            return f.value
                    .map( searchVal => isItemFieldMatch(searchVal, itemVal) )
                    .reduce( (a,b) => (a||b) );
          }

          return true;
        })
        .reduce( (a,b) => a && b );

      if(!result) return false;
    }

    return true;

    //-------
    function isItemFieldMatch(searchVal, itemVal){
      if(Array.isArray(itemVal)){
        if(itemVal.length==0) return false;
        return itemVal.map( val => searchVal==val ).reduce( (a,b) => a||b );
      } else {
        return searchVal==itemVal;
      }
    }
  }

}

class MySearcherElemCtrl {
  constructor(config, act){
    this.config = config;
    this.act = act;

    this.rootElem = null;

    // Expand action
    this.act.toggleDisplayMode  = this.toggleDisplayMode.bind(this);
    this.act.toggleAdvancePanel = this.toggleAdvancePanel.bind(this);
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
    buildAdvancedOptions();

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
        <div class="AdvancedFilterBar"></div>`);
      $("#AdvancedSearchBtn").on('click', self.act.toggleAdvancePanel);
      $("#searchInput").on('search', self.act.DoSearch);
      $("#searchInput").on('change', self.act.DoSearch);
    }
    function buildAdditionalSearchElems() {
      var baseElem = rootElem.find(".AdditionalSearchElems");

      if(self.config.isDisplayModeEnable){
        buildDisplayModeSwitch(baseElem);
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
    function buildAdvancedOptions() {
      var baseElem = rootElem.find(".AdvancedFilterBar");
      self.config.advanced.forEach( advOpt => {
        buildAdvancedOption(baseElem, advOpt);
      });

      function buildAdvancedOption(baseElem, optionObj) {
        var optElem = $(`
          <div class="AdvancedOptionEntry">
            <div class="title">${optionObj.title}</div>
            <div class="entryRow"></div>
          </div>`.fmt()).appendTo(baseElem);
        var optRowElem = optElem.find(".entryRow");

        switch(optionObj.type) {
        case "selection":
          optionObj.options
              .forEach( optItem => buildSelectOption(optRowElem, optItem) );
          break;
        }

        function buildSelectOption(baseElem, optItem) {
          if(optItem.entries){ // Folder
            var elem = $(`
              <div class="selectGroup">
                <div class="groupName">${optItem.text}</div>
                <div class="groupContent"></div>
              </div>`).appendTo(baseElem);
            elem.find('.groupName').on('click', self.toggleSelectionGroup.bind(self));

            var sunBaseElem = elem.find(".groupContent");
            optItem.entries.forEach(subOptItem => buildSelectOption(sunBaseElem, subOptItem));

          } else { // Single
            var defaultCls = (optItem.value=="*")? "default selected": "";
            var elem = $(`<div class="selectOpt ${defaultCls}">${optItem.text}</div>`).appendTo(baseElem);
            elem.on('click', self.clickSelection.bindAppend(self, optionObj.id, optItem.value));

          }
        }
      }
    }
  }


  //===================
  // Actions
  toggleDisplayMode() {
    this.config.displayMode = (this.config.displayMode=="list")? "card": "list";
    this.act.DoAfterSearch();
  }
  toggleAdvancePanel(){
    this.rootElem.find(".AdvancedFilterBar").toggle(150);
  }

  toggleSelectionGroup(evt){
    $(evt.currentTarget).toggleClass("unfold");
    $(evt.currentTarget).parent().find(".groupContent").toggle(100);
  }
  clickSelection(evt, groupId, value) {
    const elem = evt.currentTarget;
    const groupCfg = this.config.advanced.find( optGroup => optGroup.id == groupId );
    if(value!="*"){
      toggleConfigValue(elem, groupCfg, groupId, value);
    } else {
      clearConfigValue(elem, groupCfg, groupId);
    }
    setDefaultOptionClass(elem, groupCfg);

    this.act.DoSearch();

    function toggleConfigValue(elem, groupCfg, groupId, value){
      var idx = groupCfg.value.indexOf(value);
      if(idx < 0){
        groupCfg.value.push(value);
      } else {
        groupCfg.value.splice(idx, 1);
      }

      $(elem).toggleClass("selected");
    }
    function clearConfigValue(elem, groupCfg, groupId){
      groupCfg.value.length = 0;

      $(elem).parents(".AdvancedOptionEntry").find(".selectOpt").removeClass("selected");
    }
    function setDefaultOptionClass(elem, groupCfg){
      var defaultElem = $(elem).parents(".AdvancedOptionEntry").find(".selectOpt.default");
      if(groupCfg.value.length==0){
        defaultElem.addClass("selected");
      } else {
        defaultElem.removeClass("selected");
      }
    }
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
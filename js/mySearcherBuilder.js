/***********
 *  Require: 
 *   Jquery
 *   "js/mySearcher.js": class MySearcher
 */

class MySearcherBuilder{
  constructor(){
    this.searcher = null;
    this.config = {
      placeholderText: '輸入關鍵字',
      addiBarElemArr: [],
      optionsList: [],
    };
    this.afterSearchFunc = function(){
      // Usually work for print Result
      console.error("reference:afterSearchFunc not set.");
    };
  }
  //==============
  SetSearcher(searcher) { this.searcher = searcher; }
  SetOptionList(list) { this.config.optionsList = list; }
  SetAfterSearchFunc(func) { this.afterSearchFunc = func; }

  SetPlaceholderText(text) { this.config.placeholderText = text; }
  AddBarElememt(elem){ this.config.addiBarElemArr.push(elem); }
  
  GetSearchBoxValue() { return $('#searchInput').val(); }

  Build(elemId){
    const panelElem = $(`#${elemId}`);
    if(panelElem.length==0){
      console.error("cannot find element: "+this.elementId);
    }

    const self = this;
    buildBasicPanel();
    buildAdvancedOptions();

    //--------------
    function buildBasicPanel(){
      panelElem.append(`
        <div class="SearchBar Bar">
          <button id="AdvancedSearchBtn">▼ 進階搜尋</button>
          <form class="SearchBox" onsubmit="event.preventDefault();" role="search">
            <input id="searchInput" type="search" placeholder="${self.config.placeholderText}" autofocus />
            <button id="SearchBtn" type="submit">尋找</button>
          </form>
          ${self.config.addiBarElemArr}
        </div>
        <div id="AdvancedFilterPanel" class="AdvancedFilterBar"></div>`);
      $("#AdvancedSearchBtn").on('click', self.toggleAdvanceSearch);
      $("#searchInput").on('search', self.searchFunc.bind(self));
    }

    function buildAdvancedOptions(){
      for(var optionEntry of self.config.optionsList){
        var entry_id = `_option_${optionEntry.id}`;
        $("#AdvancedFilterPanel")
          .append(`<div class="Entry"><span class="Title">${optionEntry.title}</span><span id="${entry_id}" class="Options"></span></div>`);

        var optionContainer = document.getElementById(entry_id);
        if(!optionEntry.options) continue;

        for(var optionObj of optionEntry.options){
          var elem = createOptionElem(optionEntry.id, optionObj);
          optionContainer.insertBefore(elem, null);
        }
      }
      //----------
      function createOptionElem(id, optionObj){
        if(optionObj.entries) return createNestedOptionObj(id, optionObj);
        else                  return createSimpleOptionObj(id, optionObj);
      }
      function createNestedOptionObj(id, optionObj){
        var parentNode = document.createElement('div');
        parentNode.className = "Nested";

        var valueArr = optionObj.entries.map(item => item.value);
        var folderElem = document.createElement('div');
        folderElem.className = "FolderName";
        folderElem.innerHTML = optionObj.text;
        folderElem.onclick = self.clickNestedParent.bind(self, folderElem, id, valueArr);
        parentNode.insertBefore(folderElem, null);

        var folderNode = document.createElement('div');
        folderNode.className = "FolderBody";
        parentNode.insertBefore(folderNode, null);

        for (var i=0; i<optionObj.entries.length; i++) {
          var node = createSimpleOptionObj(id, optionObj.entries[i]);
          folderNode.insertBefore(node, null);
        }

        return parentNode;
      }
      function createSimpleOptionObj(id, optionObj){
        var elem = document.createElement('a');
        elem.className = (optionObj.default)? "selected": "";
        elem.setAttribute('data-value', optionObj.value);
        elem.innerHTML = optionObj.text;
        elem.onclick = self.clickSingleOption.bind(self, elem, id, optionObj.value);
        return elem;
      }
    }


  }


  //==============
  toggleAdvanceSearch(){
    $(".AdvancedFilterBar").toggle(200);
  }
  clickSingleOption(elem, type, value){
    var intend = this.getClickSingleIntend(type, value);
    var config = { value: value };
    
    this.renderOptionClass(intend, type, config);
    this.onChangeOptionsFunc(intend, type, [value]);
  }
  clickNestedParent(elem, type, valueArr){
    var intend = this.getClickGroupIntend(type, elem);
    var config = { 
      isGroup: true,
      folderElem: elem,
      valueArr: valueArr
    };

    this.renderOptionClass(intend, type, config);
    this.onChangeOptionsFunc(intend, type, valueArr);
  }


  /***
   * Intend:
   *   0: clearAll
   *   1: addSelected
   *   2: addSelectedGroup
   *  -1: removeSelected
   *  -2: removeSelectedGroup
   * */
  getClickSingleIntend(type, value){
    if(value==="*") return SEARCHER_ACTION.ClearAll;

    var selectElem = $(`#_option_${type} a[data-value='${value}']`);
    var selectedElem = $(`#_option_${type} a.selected`);

    if(selectElem.hasClass("selected")){
      if(selectedElem.length==1) return SEARCHER_ACTION.ClearAll;
      return SEARCHER_ACTION.RemoveSelected;
    } else {
      return SEARCHER_ACTION.AddSelected;
    }
  }
  getClickGroupIntend(type, folderDom){
    var folderElem = $(folderDom);
    var folderSelectedElem = $(folderDom.nextSibling).children('a.selected');
    var selectedElem = $(`#_option_${type} a.selected`);

    if(folderElem.hasClass("unfold")){
      if(selectedElem.length - folderSelectedElem.length==0)
        return SEARCHER_ACTION.ClearAll;
      return SEARCHER_ACTION.RemoveSelectedGroup;
    } else {
      return SEARCHER_ACTION.AddSelectedGroup;
    }
  }
  renderOptionClass(intend, type, valueObj){
    var siblingElems = $(`#_option_${type} a[data-value!='*']`);
    var siblingFolderElems = $(`#_option_${type} .FolderBody, #_option_${type} .FolderName`);
    var defaultElem  = $(`#_option_${type} a[data-value='*']`);

    var selectElem = $(`#_option_${type} a[data-value='${valueObj.value}']`);
    var selectGroupFolderElem = (!valueObj.isGroup)? null: $(valueObj.folderElem);
    var selectGroupFolderBodyElem = (!valueObj.isGroup)? null: $(valueObj.folderElem.nextSibling);
    var selectGroupChildrenElem = (!valueObj.isGroup)? null: selectGroupFolderBodyElem.children('a');

    switch(intend){
      case SEARCHER_ACTION.ClearAll:
        defaultElem.addClass("selected");
        siblingElems.removeClass("selected");
        siblingFolderElems.removeClass("unfold");
        break;
      case SEARCHER_ACTION.AddSelectedGroup:
        defaultElem.removeClass("selected");
        selectGroupFolderElem.addClass("unfold");
        selectGroupFolderBodyElem.addClass("unfold");
        selectGroupChildrenElem.addClass("selected");
        break;
      case SEARCHER_ACTION.AddSelected:
        defaultElem.removeClass("selected");
        selectElem.addClass("selected");
        break;
      case SEARCHER_ACTION.RemoveSelected:
        selectElem.removeClass("selected");
        break;
      case SEARCHER_ACTION.RemoveSelectedGroup:
        selectGroupFolderElem.removeClass("unfold");
        selectGroupFolderBodyElem.removeClass("unfold");
        selectGroupChildrenElem.removeClass("selected");
        break;
    }
  }

  //================
  searchFunc(){
    if(!this.searcher) return ;

    var val = this.GetSearchBoxValue();
    this.searcher.SetSimpleText(val);
    this.searcher.Search();

    if(this.afterSearchFunc) this.afterSearchFunc();
  }
  onChangeOptionsFunc(intend, type, valueArr){
    if(!this.searcher) return ;

    switch(intend){
      case SEARCHER_ACTION.ClearAll:
        this.searcher.ClearParameter(type); break;
      case SEARCHER_ACTION.AddSelected:
      case SEARCHER_ACTION.AddSelectedGroup:
        for(var value of valueArr)
          this.searcher.AddParameter(type, value);
        break;
      case SEARCHER_ACTION.RemoveSelected:
      case SEARCHER_ACTION.RemoveSelectedGroup:
        for(var value of valueArr)
          this.searcher.RemoveParameter(type, value);
        break;
    }
    this.searchFunc();
  }
}


const SEARCHER_ACTION = Object.freeze({
  ClearAll: 0,
  AddSelected: 1,
  AddSelectedGroup: 2,
  RemoveSelected: -1,
  RemoveSelectedGroup: -2,
});
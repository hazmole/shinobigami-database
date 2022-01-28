
class MyFilterOptionBuilder{
	constructor(){
		this.filterOptionList = null;
	}
	//==============
	SetOptionList(list){ this.filterOptionList = list; }


	//=====================
	Build(selector){
		var location = $(selector);
		location.empty();

		for(var entry of this.filterOptionList){
			var entry_id = `_filter_${entry.id}`;
			location.append(`<div class="Entry"><span class="Title">${entry.title}</span><span id="${entry_id}" class="Options"></span></div>`);
			
			var optionContainer = document.getElementById(entry_id);
			for(var option of entry.options){
				var obj = createOptionObj(this, entry.id, option);
				if(obj!=null) optionContainer.insertBefore(obj, null);
			}
		}
		return ;
		//======================
		function createOptionObj(builder, id, option){
			if(option.isNested)
				return createNestedOptionObj(builder, id, option);
			else
				return createSimpleOptionObj(builder, id, option);
		}

		function createNestedOptionObj(builder, id, option){
			var parentNode = document.createElement('div');
			parentNode.className = "Nested";
			
			var titleNode = document.createElement('div');
			titleNode.className = "FolderName";
			titleNode.innerHTML = option.text;
			titleNode.onclick = builder.ToggleNestedChildren.bind(builder, titleNode, id, option.value);
			parentNode.insertBefore(titleNode, null);

			var folderNode = document.createElement('div');
			folderNode.className = "FolderBody";
			parentNode.insertBefore(folderNode, null);

			for (var i=0; i<option.entries.length; i++) {
				var node = createSimpleOptionObj(builder, id, option.entries[i]);
				folderNode.insertBefore(node, null);
			}

			return parentNode;
		}
		function createSimpleOptionObj(builder, id, option){
			var obj = document.createElement('a');
			obj.className = (option.default)? "selected": "";
			obj.setAttribute('data-value', option.value);
			obj.innerHTML = option.text;
			obj.onclick = builder.Select.bind(builder, obj, id, option.value);
			return obj;
		}
	}



	Select(obj, type, value){
		const event = new CustomEvent('selectFilterOption', { detail: {
			type: type,
			value: value
		}});
		window.dispatchEvent(event);
	}

	ToggleNestedChildren(obj){
		$(obj).toggleClass("unfold");
		$(obj.nextSibling).toggleClass("unfold");
	}
}

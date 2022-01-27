
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
				var obj = document.createElement('a', );
				if(option.default){
					obj.className = "selected";
				}
				obj.setAttribute('data-value', option.value);
				obj.innerHTML = option.text;
				obj.onclick = this.Select.bind(this, obj, entry.id, option.value);
				optionContainer.insertBefore(obj, null);
			}
		}
	}



	Select(obj, type, value){
		const event = new CustomEvent('selectFilterOption', { detail: {
			type: type,
			value: value
		}});
		window.dispatchEvent(event);
	}
}

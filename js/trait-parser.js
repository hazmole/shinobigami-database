class TraitParser {
	//==========================
	// Main
	static getElem(dataObj, options) {
		const isListMode = (options.mode == "list");

		var name = this.getName(dataObj);
		var categoryStyle = dataObj.category;
		var categoryText = this.getCategoryText(dataObj.category, isListMode);
		var reqExpText = dataObj.exp.join('/');

		var limitElem = `<span class="restricts">${this.getRestricts(dataObj.restrict)}</span>`;
		var actionBarElem = this.getActionBar(options.actions);


		if(isListMode)
			return `<div class="info-card row trait">
		<div class="titleCell">
			<div class="category ${categoryStyle}">${categoryText}</div>
			<div class="title">${name}</div>
			${actionBarElem}
		</div>
		<div class="blockCell">
			<div class="cell-label">必要功績點</div>
			<div class="cell-content reqExp">${reqExpText}</div>
		</div>
		<div class="field left effect">${limitElem}${dataObj.effect.join('<br>')}</div>
	</div>`;

		else
			return `<div class="info-card card trait">
		<div class="header">
			<div class="titleRow">
				<div class="title">${name}</div>
				<div class="attributes">
					<span class="category ${categoryStyle}">${categoryText}</span>
					${limitElem}
				</div>
			</div>
			${actionBarElem}
			<div class="arguments">
				<div class="tag-label">必要功績點</div>
				<div class="tag-content reqExp">${reqExpText}</div>
			</div>
		</div>
		<div class="body">
			<div class="effect large">${dataObj.effect.join('<p>')}</div>
			<div class="desc">${dataObj.desc.join('<br>')}</div>
		</div>
	</div>`;
	}

	static getCopiedText(dataObj) {
		var sign = (dataObj.category == "benefit")? "'+": "'-";
		var name = this.getName(dataObj);
		var reqExp = dataObj.exp.join('/');
		var effect = dataObj.effect.join("");

		return `${sign}\t${name}\t\t\t\t\t\t${reqExp}\t\t\t${effect}`;
	}

	//=========================
	// Components
	static getName(dataObj){
		if(dataObj.name.length==0) return '???';
		return (dataObj.features?.canReLearn? '※': '')+dataObj.name[0];
	}
	static getCategoryText(category, isSimple){
		switch(category){
			case "benefit": return '長所';
			case "flaw": return '弱點';
			default:
				return '???';
		} 
	}
	static getRestricts(restrict_arr){
		function getRestrictClass(res){
			if(res.indexOf("clan-")==0) return 'clan';
			switch(res){
				case "taima": return "taima";
				case "sengoku": return "sengoku";
				case "ancient": return "sengoku";
				default: return "";
			}
		}
		function getRestrictText(res){
			if(res.indexOf("clan-")==0) return res.split("clan-")[1];
			switch(res){
				case "taima": return "退魔篇";
				case "sengoku": return "戰國篇";
				case "exclude-sengoku": return "非戰國篇角色";
				case "ancient": return "修得古流忍法者";
				case "seance": return "可修得惟神者";
				default: return res;
			}
		}

		if(restrict_arr==null || restrict_arr.length==0) return '';
		return restrict_arr.map(v => `<span class="restrict ${getRestrictClass(v)}">${getRestrictText(v)}</span>`).join('');
	}
	static getActionBar(list){
		function getActionIcon(item){
			return `<div class="action ${item.icon}" title="${item.label}"></div>`
		}
		return `<div class="actionBar">${ list.map(item => getActionIcon(item)).join("") }</div>`;
	}
}

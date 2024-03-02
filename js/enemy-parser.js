var NINPO_LIST;

class EnemyParser {
	//==========================
	// Main
	static getElem(dataObj, options) {
		const isListMode = (options.mode == "list");

		var name = this.getName(dataObj);
		var categoryStyle = this.getCategoryStyle(dataObj.category);
		var categoryText = this.getCategoryText(dataObj.category, isListMode);
		var level = dataObj.level;
		var hp = dataObj.hp;
		var field = dataObj.skillField;
		var skillText = dataObj.skills.join("、");
		var gearText = this.getGear(dataObj.gear);
		var ultimateText = this.getUltimate(dataObj.ultimate);
		var ninpoListText = dataObj.ninpoList.map( ninpo => this.getNinpo(ninpo) ).join("");

		var actionBarElem = this.getActionBar(options.actions);


		if(isListMode)
			return `<div class="info-card row trait">
		<div class="titleCell">
			<div class="category ${categoryStyle}">${categoryText}</div>
			<div class="title">${name}</div>
			${actionBarElem}
		</div>
		<div class="blockCell level">
			<div class="cell-label">威脅度</div>
			<div class="cell-content">${level}</div>
		</div>
		<div class="blockCell hp">
			<div class="cell-label">生命力</div>
			<div class="cell-content">${hp}</div>
		</div>
		<div class="blockCell field">
			<div class="cell-label">擅長分野</div>
			<div class="cell-content">${field}</div>
		</div>
		<div class="blockCell skill">
			<div class="cell-label">特技</div>
			<div class="cell-content">${skillText}</div>
		</div>
		<div class="blockCell gear">
			<div class="cell-label">持有忍具</div>
			<div class="cell-content">${gearText}</div>
		</div>
		<div class="blockCell ultimate">
			<div class="cell-label">奧義</div>
			<div class="cell-content">${ultimateText}</div>
		</div>
		<div class="ninpo-list">
			${ninpoListText}
		</div>
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
		var name = this.getName(dataObj);
		var category = this.getCategoryText(dataObj.category);
		return `${name}\t\t${category}`;
	}

	//=========================
	// Components
	static getName(dataObj){
		if(dataObj.name.length==0) return '???';
		return dataObj.name[0];
	}
	static getCategoryStyle(category){
		switch(category){
			case "ke-nin": 
			case "chu-nin": 
			case "jo-nin": return 'ninja';
			case "lesser-demon": 
			case "common-demon": 
			case "great-demon": return 'demon';
			default:
				return category;
		}
	}
	static getCategoryText(category, isSimple){
		switch(category){
			case "common": return '常人';
			case "beast": return '忍獸';
			case "ke-nin": return '下忍';
			case "chu-nin": return '中忍';
			case "jo-nin": return '上忍';
			case "lesser-demon": return '低級妖魔';
			case "common-demon": return '中級妖魔';
			case "great-demon": return '上級妖魔';
			default:
				return '???';
		} 
	}
	static getGear(gear){
		if(gear.length==0) return '-';
		return gear.join("<br>");
	}
	static getUltimate(ultimate){
		if(ultimate.length==0) return '-';
		if(ultimate.length==1 && ultimate[0]=="追加忍法以外") return `6種<br>（${ultimate[0]}）`;
		return `${ultimate.length}種<br>（${ultimate.join("、<br>")}）`;
	}
	static getNinpo(ninpoObj){
		var sourceName = (ninpoObj.name).split("：")[0];
		var fullNinpoObj = NINPO_LIST.find( obj => {
			var targetName = (obj.name[0][0]=="※")? obj.name[0].slice(1): obj.name[0];
			return targetName==sourceName;
		});
		if(fullNinpoObj==null){
			return `<div>${ninpoObj.name}</div>`;
		}

		var tmpObj = Object.assign({}, fullNinpoObj);

		tmpObj.name = [ ninpoObj.name.replace("：",":") ];
		delete tmpObj.features;
		if(ninpoObj.skill) { tmpObj.skills = [ ninpoObj.skill ]; }

		return NinpoParser.getElem(tmpObj, { mode:"fold-list" });
	}


	static getActionBar(list){
		function getActionIcon(item){
			return `<div class="action ${item.icon}" title="${item.label}"></div>`
		}
		return `<div class="actionBar">${ list.map(item => getActionIcon(item)).join("") }</div>`;
	}
}

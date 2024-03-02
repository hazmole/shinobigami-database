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
		var ultimateText = this.getUltimate(dataObj.ultimate, !isListMode);
		var ninpoListText = dataObj.ninpoList.map( ninpo => this.getNinpo(ninpo) ).join("");

		var actionBarElem = this.getActionBar(options.actions);


		if(isListMode)
			return `<div class="info-card row enemy">
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
			return `<div class="info-card card enemy">
		<div class="header">
			<div class="titleRow">
				<div class="level">
					<div class="label">威脅度</div>
					<div class="value">${level}</div>
				</div>
				<div class="title">${name}</div>
				<div class="attributes">
					<span class="category ${categoryStyle}">${categoryText}</span>
				</div>
			</div>
		</div>
		<div class="body">
			<div class="desc">${dataObj.desc.join('<br>')}</div>
			<div class="bodyRow">
				<div class="sideBlock">
					<div class="block-cell health">
						<div class="label">生命力</div>
						<div class="value">${hp}</div>
					</div>
					<div class="block-cell gear">
						<div class="label">忍具</div>
						${ dataObj.gear.length==0? 
							`<div class="value"> - </div>`:
							dataObj.gear.map( val => `<div class="value">${val}</div>`).join('') }
					</div>
					<div class="block-cell ultimate">
						<div class="label">奧義</div>
						<div class="value">${ ultimateText }</div>
					</div>
					<div class="block-cell note">
						<div class="label">附註</div>
						<div class="value">${ dataObj.note }</div>
					</div>
				</div>
				<div class="mainBlock">
					<div class="block-cell skills">
						<div class="label">特技</div>
					</div>
					${ this.getSkillTable(field, dataObj.skills) }
				</div>
			</div>
		</div>
		<div class="ninpo-list">
			${ninpoListText}
		</div>
		${actionBarElem}
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
	static getUltimate(ultimate, isCard){
		if(ultimate.length==0) return '-';

		var num = ultimate.length;
		if(ultimate.length==1 && ultimate[0]=="追加忍法以外") num = 6;

		if(isCard) return `${num}種<br>${ultimate.map( v => `<div style="font-size:.9em;">(${v})</div>`).join("")}`;
		return `${num}種<br>(${ultimate.join(",<br>")})`;
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

	static getSkillTable(field, skillArr){
		var list = Utils.SkillTable;

		var fieldIdx = list.findIndex( f => f.text==field );

		var contentArr = [];
		for(var i=0; i<6; i++){
			var isFiedlMark = (fieldIdx==i) || (fieldIdx+1==i);

			contentArr.push(`<div class="field-gap ${isFiedlMark? "mark": ""}"></div>`);
			contentArr.push(`<div class="field-content">
				<div class="title">${ list[i].text }</div>
				${ list[i].list.map( item => `<div class="skill ${skillArr.indexOf(item.text)>=0? "mark": ""}">${item.text}</div>`).join('') }
			</div>`);
		}
		return `<div class="skillTable">${contentArr.join("")}</div>`
	}


	static getActionBar(list){
		function getActionIcon(item){
			return `<div class="action ${item.icon}" title="${item.label}"></div>`
		}
		return `<div class="actionBar">${ list.map(item => getActionIcon(item)).join("") }</div>`;
	}
}

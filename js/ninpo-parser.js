class NinpoParser {
	//==========================
	// Main
	static getElem(ninpoObj, options) {
		const displayMode = (options.mode);
		const isListMode = displayMode!="card";

		var name = this.getName(ninpoObj);
		var categoryStyle = ninpoObj.category[0];
		var categoryText = this.getCategoryText(ninpoObj.category, isListMode);
		var typeStyle = ninpoObj.type;
		var typeText  = this.getType(ninpoObj.type, isListMode);
		var range = this.getRange(ninpoObj.range);
		var cost = this.getCost(ninpoObj.cost);
		var skills = this.getSkill(ninpoObj.skills);

		var limitElem = `<span class="restricts">${this.getRestricts(ninpoObj.restrict)}</span>`;
		var actionBarElem = this.getActionBar(options.actions);

		switch(displayMode){
		case "list":
			return `<div class="info-card row ninpo">
				<div class="titleCell">
					<div class="category ${categoryStyle}">${categoryText}</div>
					<div class="title">${name}</div>
					${actionBarElem}
				</div>
				<div class="type ${typeStyle}">${typeText}</div>
				<div class="blockCell">
					<div class="cell-label">間隔</div>
					<div class="cell-content range">${range}</div>
				</div>
				<div class="blockCell">
					<div class="cell-label">花費</div>
					<div class="cell-content cost">${cost}</div>
				</div>
				<div class="blockCell">
					<div class="cell-label">指定特技</div>
					<div class="cell-content skill">${skills}</div>
				</div>
				<div class="field left effect">${limitElem}${ninpoObj.effect.join('<br>')}</div>
			</div>`;
		case "card":
			return `<div class="info-card card ninpo">
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
						<div class="tag-label">種類</div>
						<div class="tag-content type ${typeStyle}">${typeText}</div>
						<div class="tag-label">間隔</div>
						<div class="tag-content range">${range}</div>
						<div class="tag-label">花費</div>
						<div class="tag-content cost">${cost}</div>
					</div>
					<div class="arguments">
						<div class="tag-label skill">指定特技</div>
						<div class="tag-content skill">${skills}</div>
					</div>
				</div>
				<div class="body">
					<div class="effect">${ninpoObj.effect.join('<p>')}</div>
					<div class="desc">${ninpoObj.desc.join('<br>')}</div>
				</div>
			</div>`;
		case "fold-list":
			return `<div class="fold-list ninpo">
				<div class="name">${name}</div>
				<div class="type ${typeStyle}">${typeText}</div>
				<div class="range">間隔 ${ range=="無"?"-":range }</div>
				<div class="cost">花費 ${ cost=="無"?"-":cost }</div>
				<div class="skill">${ skills=="無"?"-":skills }</div>
				<div><button onclick="NinpoParser.toggleFoldedEffect(this)">展開效果</button></div>
			</div>
			<div class="folded-effect">${ninpoObj.effect.join('<p>')}</div>`;
		}

	}

	static getCopiedText(ninpoObj) {
		var name = this.getName(ninpoObj);
		var type = this.getType(ninpoObj.type, true);
		var skill = this.getSkill(ninpoObj.skills);
		var range = this.getRange(ninpoObj.range);
		var cost = this.getCost(ninpoObj.cost);
		var effect = ninpoObj.effect.join("");

		return `${name}\t\t\t\t${type}\t\t${skill}\t\t\t${range}\t\t${cost}\t\t${effect}`;
	}

	//=========================
	// Components
	static getName(ninpoObj) {
		if(ninpoObj.name.length==0) return '???';
		return (ninpoObj.features?.canReLearn? '※': '')+ninpoObj.name[0];
	}
	static getCategoryText(category, isSimple){
		switch(category[0]){
			case "general":   return '泛用'+(isSimple?"":"忍法");
			case "demon":     return '妖魔'+(isSimple?"":"忍法");
			case "bloodbond": return '血盟'+(isSimple?"":"忍法");
			case "ancient":
				if(category.length<=1) return '-';
				var textArr = category.slice(1);
				return '古流-'+textArr.map(t=>getClanNameText(t,isSimple)).join("-");
			case "cultist":
				if(category.length<=1) return '-';
				var textArr = category.slice(1);
				return '外道-'+textArr.map(t=>getClanNameText(t,isSimple)).join("-");
			case "enemy":
				if(category.length<=1) return '-';
				var textArr = category.slice(1);
				return '敵人-'+textArr.map(t=>getClanNameText(t,isSimple)).join("-");
			default:
				if(category.length<=1) return '-';
				var textArr = category.slice(1);
				return textArr.map(t=>getClanNameText(t,isSimple)).join("-");
		}

		function getClanNameText(clan, isSimple){
			if(!isSimple) return clan;
			switch(clan){
				case "斜齒忍軍": return '斜齒';
				case "鞍馬神流": return '鞍馬';
				case "離群者": return '離群';
				case "比良坂機關": return '比良坂';
				case "私立御齋學園": return '御齋';
				case "隱忍血統": return '隱忍';
				case "麝香會綜合醫院": return '麝香會';	
				case "特命臨時教職員派遣委員會": return '特命教職員';
				case "御齋學園學生會": return '學生會';
				case "私立多羅尾女學院": return "多羅尾";
				case "舊校舍管理委員會": return "舊校舍";
				case "麥克菲登偵探教室": return "麥克菲登";
			} 
			return clan;
		}
	}

	static getType(type, isSimple){
		function getTypeText(type){
			switch(type){
				case 'atk': return '攻擊';
				case 'sup': return '輔助';
				case 'equ': return '裝備';
			}
			return type;
		}
		return (isSimple)? getTypeText(type): (getTypeText(type)+'忍法');
	}
	static getRange(range){
		if(Number.isInteger(range)) return range;
		return '無';
	}
	static getCost(cost){
		if(cost!=0) return cost;
		return '無';
	}
	static getSkill(skill_arr){
		if(skill_arr.length==0) return '無';
		return skill_arr.join("/");
	}
	static getRestricts(restrict_arr){
		function getRestrictClass(res){
			if(res.indexOf("rank-")==0) return 'rank';
			return res;
		}
		function getRestrictText(res){
			switch(res){
				case "taima": return "退魔篇";
				case "rank-chunin": return "中忍";
				case "rank-chunintou": return "中忍頭";
				case "rank-jonin": return "上忍";
				case "rank-jonintou": return "上忍頭";
				case "rank-gashira": return "頭領";
				default: return "";
			}
		}

		if(restrict_arr==null || restrict_arr.length==0) return '';
		return restrict_arr.map(v => `<span class="restrict ${getRestrictClass(v)}">${getRestrictText(v)}</span>`).join('');
	}
	static getActionBar(list){
		function getActionIcon(item){
			return `<div class="action ${item.icon}" title="${item.label}"></div>`
		}
		if(!list) return "";
		return `<div class="actionBar">${ list.map(item => getActionIcon(item)).join("") }</div>`;
	}


	//=========================
	// Interactions
	static toggleFoldedEffect(evt) {
		$(evt).parents(".fold-list").next().toggle(100)
	}
}

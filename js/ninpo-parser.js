function parseNinpo(ninpoObj, mode){
	function getName(ninpoObj){
		if(ninpoObj.name.length==0) return '???';
		return (ninpoObj.features?.canReLearn? '※': '')+ninpoObj.name[0];
	}
	function getCategoryText(category, isSimple){
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
			default:
				if(category.length<=1) return '-';
				var textArr = category.slice(1);
				return textArr.map(t=>getClanNameText(t,isSimple)).join("-");
		} 
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
			case "特命臨時教職員派遣委員會": return '特教委';
		} 
		return clan;
	}

	function getType(type, isSimple){
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
	function getRange(range){
		if(Number.isInteger(range)) return range;
		return '無';
	}
	function getCost(cost){
		if(cost!=0) return cost;
		return '無';
	}
	function getSkill(skill_arr){
		if(skill_arr.length==0) return '無';
		return skill_arr.join("/");
	}
	function getRestricts(restrict_arr){
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
	var limitHtml = `<span class="restricts">${getRestricts(ninpoObj.restrict)}</span>`;

	if(mode=='list')
		return `<div class="info-card row ninpo">
	<div class="titleCell">
		<div class="category ${ninpoObj.category[0]}">${getCategoryText(ninpoObj.category, true)}</div>
		<div class="title">${getName(ninpoObj)}</div>
		<div class="actionBar">
			<button>X</button>
		</div>
	</div>
	<div class="type ${ninpoObj.type}">${getType(ninpoObj.type, true)}</div>
	<div class="blockCell">
		<div class="cell-label">間隔</div>
		<div class="cell-content range">${getRange(ninpoObj.range)}</div>
	</div>
	<div class="blockCell">
		<div class="cell-label">花費</div>
		<div class="cell-content cost">${getCost(ninpoObj.cost)}</div>
	</div>
	<div class="blockCell">
		<div class="cell-label">指定特技</div>
		<div class="cell-content skill">${getSkill(ninpoObj.skills)}</div>
	</div>
	<div class="field left effect">${limitHtml}${ninpoObj.effect.join('<br>')}</div>
</div>`;

	else
		return `<div class="info-card card ninpo">
	<div class="header">
		<div class="titleRow">
			<div class="title">${getName(ninpoObj)}</div>
			<div class="attributes">
				<span class="category ${ninpoObj.category[0]}">${getCategoryText(ninpoObj.category)}</span>
				${limitHtml}
			</div>
		</div>
		<div class="arguments">
			<div class="tag-label">種類</div>
			<div class="tag-content type ${ninpoObj.type}">${getType(ninpoObj.type)}</div>
			<div class="tag-label">間隔</div>
			<div class="tag-content range">${getRange(ninpoObj.range)}</div>
			<div class="tag-label">花費</div>
			<div class="tag-content cost">${getCost(ninpoObj.cost)}</div>
		</div>
		<div class="arguments">
			<div class="tag-label skill">指定特技</div>
			<div class="tag-content skill">${getSkill(ninpoObj.skills)}</div>
		</div>
	</div>
	<div class="body">
		<div class="effect">${ninpoObj.effect.join('<p>')}</div>
		<div class="desc">${ninpoObj.desc.join('<br>')}</div>
	</div>
</div>`;
}


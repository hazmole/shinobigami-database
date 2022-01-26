function parseNinpo(ninpoObj){
	function getName(ninpoObj){
		if(ninpoObj.name.length==0) return '???';
		return (ninpoObj.features?.canReLearn? '※': '')+ninpoObj.name[0];
	}
	function getCategoryText(category){
		switch(category[0]){
			case "general": return '泛用';
			case "demon": return '妖魔忍法';
			default:
				if(category.length<=1) return '-';
				return category.splice(1).join("-");
		} 
	}


	function getType(type){
		switch(type){
			case 'atk': return '攻擊忍法';
			case 'sup': return '輔助忍法';
			case 'equ': return '裝備忍法';
		}
		return '-'
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
		function getRestrictText(res){
			switch(res){
				case "taima": return "退魔篇";
				case "rank-chunin": return "中忍限定";
				case "rank-chunintou": return "中忍頭限定";
				case "rank-jonin": return "上忍限定";
				case "rank-jonintou": return "上忍頭限定";
				default: return "";
			}
		}

		if(restrict_arr==null || restrict_arr.length==0) return '';
		return restrict_arr.map(v => `<span class="restrict ${v}">${getRestrictText(v)}</span>`).join('');
	}

	return `<div class="ninpo-card">
	<div class="header">
		<div class="title">
			<div class="mainTitle">${getName(ninpoObj)}</div>
			<div class="attributes">
				<span class="category ${ninpoObj.category[0]}">${getCategoryText(ninpoObj.category)}</span>
				<span class="restricts">${getRestricts(ninpoObj.restrict)}</span>
			</div>
		</div>
		<div class="arguments">
			<div class="tag type ${ninpoObj.type}">${getType(ninpoObj.type)}</div>
			<div class="tag range">${getRange(ninpoObj.range)}</div>
			<div class="tag cost">${getCost(ninpoObj.cost)}</div>
		</div>
		<div class="arguments">
			<div class="tag skill">${getSkill(ninpoObj.skills)}</div>
		</div>
	</div>
	<div class="body">
		<div class="effect">${ninpoObj.effect.join('<p>')}</div>
		<div class="desc">${ninpoObj.desc.join('<br>')}</div>
	</div>
</div>`;
}
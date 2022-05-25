function parseBackgroundInfo(dataObj, mode){
	function getName(dataObj){
		if(dataObj.name.length==0) return '???';
		return (dataObj.features?.canReLearn? '※': '')+dataObj.name[0];
	}
	function getCategoryText(category, isSimple){
		switch(category){
			case "benefit": return '長所';
			case "flaw": return '弱點';
			default:
				return '???';
		} 
	}
	function getRestricts(restrict_arr){
		function getRestrictClass(res){
			if(res.indexOf("clan-")==0) return 'clan';
			switch(res){
				case "taima": return "taima";
				case "sengoku": return "sengoku";
				case "exclude-sengoku": return "sengoku";
				default: return "";
			}
		}
		function getRestrictText(res){
			if(res.indexOf("clan-")==0) return res.split("clan-")[1];
			switch(res){
				case "taima": return "退魔篇";
				case "sengoku": return "戰國篇";
				case "exclude-sengoku": return "非戰國篇角色";
				default: return res;
			}
		}

		if(restrict_arr==null || restrict_arr.length==0) return '';
		return restrict_arr.map(v => `<span class="restrict ${getRestrictClass(v)}">${getRestrictText(v)}</span>`).join('');
	}
	var limitHtml = `<span class="restricts">${getRestricts(dataObj.restrict)}</span>`;


	if(mode=='list')
		return `<div class="ninpo ninpo-item">
	<div class="title">
		<div class="category ${dataObj.category}">${getCategoryText(dataObj.category, true)}</div>
		<div class="mainTitle">${getName(dataObj)}</div>
	</div>
	<div class="blockCell">
		<div class="req_exp ${dataObj.category}">${dataObj.exp.join('/')}</div>
	</div>
	<div class="field left effect">${limitHtml}${dataObj.effect.join('<br>')}</div>
</div>`;

	else
		return `<div class="ninpo ninpo-card">
	<div class="header">
		<div class="title">
			<div class="mainTitle">${getName(dataObj)}</div>
			<div class="attributes">
				<span class="category ${dataObj.category}">${getCategoryText(dataObj.category)}</span>
				${limitHtml}
			</div>
		</div>
		<div class="arguments">
			<div class="tag req_exp ${dataObj.category}">${dataObj.exp.join('/')}</div>
		</div>
	</div>
	<div class="body">
		<div class="effect large">${dataObj.effect.join('<p>')}</div>
		<div class="desc">${dataObj.desc.join('<br>')}</div>
	</div>
</div>`;
}


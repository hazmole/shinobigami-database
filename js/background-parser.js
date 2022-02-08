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
		function getRestrictText(res){
			switch(res){
				case "taima": return "退魔篇";
				case "rank-chunin": return "中忍限定";
				case "rank-chunintou": return "中忍頭限定";
				case "rank-jonin": return "上忍限定";
				case "rank-jonintou": return "上忍頭限定";
				case "rank-gashira": return "頭領限定";
				default: return "";
			}
		}

		if(restrict_arr==null || restrict_arr.length==0) return '';
		return restrict_arr.map(v => `<span class="restrict ${v}">${getRestrictText(v)}</span>`).join('');
	}
	var limitHtml = '';//`<span class="restricts">${getRestricts(ninpoObj.restrict)}</span>`;


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

